const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = {
  usernameField: 'email',
};
const localLogin = new LocalStrategy(localOptions, async function (
  email,
  password,
  done
) {
  try {
    // Verify this email and password, call 'done' with the user
    // if it is the correct email and password
    // otherwise, call 'done' with false
    const user = await User.findOne({ email: email });

    if (!user) {
      return done(null, false);
    }

    // compare passwords - is `password` equal to user.password?
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that user
  // Otherwise, call done without a user object
  User.findById(payload.sub)
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch((err) => {
      done(err, false);
    });
});

// Tell passport to use this Strategy
passport.use(jwtLogin);
passport.use(localLogin);
