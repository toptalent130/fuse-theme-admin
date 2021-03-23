const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatChangePasswordInput(data) {
  let errors = {};

  data.current_password = !isEmpty(data.current_password) ? data.current_password : '';
  data.new_password = !isEmpty(data.new_password) ? data.new_password : '';
  data.confirm_password = !isEmpty(data.confirm_password) ? data.confirm_password : '';

if (!Validator.isLength(data.current_password, { min: 6, max: 30 })) {
    errors.current_password = 'Password must be at least 6 characters';
}
if (Validator.isEmpty(data.current_password)) {
    errors.current_password = 'Password field is required';
}

if (!Validator.isLength(data.new_password, { min: 6, max: 30 })) {
    errors.new_password = 'Password must be at least 6 characters';
}

if (Validator.isEmpty(data.new_password)) {
  errors.new_password = 'Password field is required';
}
if (!Validator.isLength(data.confirm_password, { min: 6, max: 30 })) {
    errors.confirm_password = 'Password must be at least 6 characters';
}

if (Validator.isEmpty(data.confirm_password)) {
  errors.confirm_password = 'Password field is required';
}

if (!Validator.equals(data.new_password, data.confirm_password)) {
  errors.confirm_password = 'Passwords must match';
}
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
