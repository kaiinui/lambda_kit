var chai = require("chai");
var expect = chai.expect;
var sinon = require("sinon");
var context = require("./lambda_driver/context");
var event = require("./lambda_driver/s3_put_event");

describe('app.js', function() {
    describe('lambda', function() {
        var lambda = require("../app");
        lambda.handler(event, context);

        expect(true).to.eq(true);
    });
});