'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    foo: 'bar',
    MY_VAR: process.env.MY_VAR,
    SECRET_VAR: process.env.SECRET_VAR,
  };

  callback(null, response);
};
