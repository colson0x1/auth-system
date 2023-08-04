const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// On save hook, encrypt password
// Run this func before saving a model
userSchema.pre('save', async function (next) {
  // get access to the user model
  const user = this;

  try {
    // generate a salt
    const salt = await bcrypt.genSalt(10);

    // hash (encrypt) our password using the salt
    const hash = await bcrypt.hash(user.password, salt);

    // overwrite plain text password with encrypted password
    user.password = hash;
    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Compare candidatePassword with the stored password hash
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
