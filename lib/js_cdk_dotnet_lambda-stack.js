const cdk = require('@aws-cdk/core');
const { Lambda_Stack } = require('./infrastructure/lambda-stack');

class JsCdkDotnetLambdaStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new Lambda_Stack(this, 'dotnetLambda');
  }
}

module.exports = { JsCdkDotnetLambdaStack }
