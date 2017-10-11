const validate = (values) => {
  // IMPORTANT: values is an ImmutableMap here!
  const errors = {};
  const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.get('email')) {
    errors.email = 'required_error';
  }

  if (!values.get('name')) {
    // Key string for error
    errors.name = 'required_error';
  }

  if (values.get('email') && !emailRE.test(values.get('email'))) {
    errors.email = 'invalid_error';
  }

  return errors;
};
export default validate ;
