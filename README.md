# Pollen Notifications

![status: dropped](https://img.shields.io/badge/status-dropped-inactive)

## About this Project

An app that sends me a notification everyday at 9AM if the pollen count is going to be >medium today so that I know if I should take an antihistamine.

### Built with

- AWS CDK
- AWS Lambda
- AWS EventBridge (Cron)
- Webpack & Babel (bundling)
- Jest (testing)
- Amazon SNS (notifications)
- TBD React Native (basic app for SNS)

## Getting Started

### Prerequisites

- Node
- AWS CDK CLI

### Installation

1. Install the dependencies.

```
npm i
```

## Deployment

This project is hosted on AWS.

### Backend

1. Build the source JavaScript.

```
npm run build
```

2. Run the tests.

```
npm test
```

3. Deploy to AWS.

```
cdk deploy
```

## Usage

TBD

## Roadmap

- [ ] Amazon SNS mobile push notifications
- [ ] Basic React Native app if required for SNS

## Release History

- v0.1.0
  - CDK script, Lambda, and pollen API call
