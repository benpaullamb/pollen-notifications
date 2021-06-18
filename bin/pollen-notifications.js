#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { PollenNotificationsStack } = require('../lib/pollen-notifications-stack');

const app = new cdk.App();
new PollenNotificationsStack(app, 'PollenNotificationsStack');
