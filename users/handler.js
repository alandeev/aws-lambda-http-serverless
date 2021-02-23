'use strict';

module.exports.getUsers = async (event) => {
  const users = [
    "pedro",
    "antonio",
    "afonso",
    "julia",
    "barbosa"
  ]

  return {
    statusCode: 200,
    body: JSON.stringify({ results: users })
  };
};
