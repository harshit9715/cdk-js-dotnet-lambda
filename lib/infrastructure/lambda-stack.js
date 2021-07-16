const cdk = require('@aws-cdk/core');
// const { NodejsFunction } = require("@aws-cdk/aws-lambda-nodejs");
const aws_lambda = require("@aws-cdk/aws-lambda");

class Lambda_Stack extends cdk.NestedStack {
  hellofx;
    /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
	// defines an AWS Lambda resource
    const hellofx = new aws_lambda.Function(this, 'fooLambda', {
		runtime: aws_lambda.Runtime.DOTNET_CORE_3_1,    // execution environment
		code: aws_lambda.Code.fromAsset('src/lambdas/FooLambda/publish'),  // code loaded from "lambda" directory
		handler: 'FooLambda::FooLambda.Functions::Get'                // file is "hello", function is "handler"
	  });

    this.hellofx = hellofx;
  }
}

module.exports = { Lambda_Stack }
