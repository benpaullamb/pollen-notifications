const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const PollenNotifications = require('../lib/pollen-notifications-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PollenNotifications.PollenNotificationsStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
