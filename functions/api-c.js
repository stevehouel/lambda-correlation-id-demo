const log        = require('../lib/log');
const apiHandler = require('../lib/apihandler');

const AWSXRay        = require('aws-xray-sdk');
const tracer = require('dd-trace').init()

AWSXRay.captureHTTPsGlobal(require('http'));

module.exports.handler = apiHandler((event, context) => {
  log.debug("this is a DEBUG log");
  log.info("this is an INFO log");
  log.warn("this is a WARNING log");
  log.error("this is an ERROR log");

  return {
    message: "What's dead may never die."
  };
});