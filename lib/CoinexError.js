// Generated by CoffeeScript 2.5.1
(function() {
  var CoinexError;

  CoinexError = class CoinexError extends Error {
    constructor(code, message) {
      super(message);
      this.code = code;
      Error.captureStackTrace(this, CoinexError);
    }

  };

  module.exports = CoinexError;

}).call(this);