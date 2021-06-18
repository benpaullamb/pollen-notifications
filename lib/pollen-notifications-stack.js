const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda');
const events = require('@aws-cdk/aws-events');
const targets = require('@aws-cdk/aws-events-targets');

class PollenNotificationsStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const lambdaFunc = new lambda.Function(this, 'PollenLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('dist'),
      handler: 'pollen-lambda.handler',
      timeout: cdk.Duration.seconds(10),
    });

    new events.Rule(this, 'CronRule', {
      schedule: events.Schedule.cron({ hour: '9' }),
      targets: [new targets.LambdaFunction(lambdaFunc)],
    });
  }
}

module.exports = { PollenNotificationsStack };
