lambda_kit
==========

A set of helpers (.d.ts, handler driver..) for AWS Lambda development.

### Using `lambda.d.ts`

```ts
/// <reference path="lambda.d.ts" />

exports.handler = function(event: S3PutEvent, context: Context) {
    var record: S3PutRecord = event.Records[0];

    console.log(record.eventVersion);
    console.log(record.s3.object.key);

    context.done(null, "done!");
}
```

No more type related disaster!

### Using fake `context` and `event`

```js
var context = require("./lambda_driver/context");
var event = require("./lambda_driver/s3_put_event");

var myLambda = require("../app.js");

// Simulate Lambda function invocation
myLambda.handler(event, context);
```

