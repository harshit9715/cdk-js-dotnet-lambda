# Welcome to your CDK JavaScript project that deploys dotnet lambdas!

- Infrastructure is in javascript
- Lambda is written in dotnet 3.1

## Building the dotnet code

- Build all lambdas with `npm run build`

- when adding a new lambda add its build script command in [package.json](./package.json) eg: `"build:FooLambda2": "cd src/lambdas/FooLambda2;dotnet publish -o publish"`
- also add its name in the list of build command in [package.json](./package.json) eg: `npm-run-all build:FooLambda build:FooLambda2`

## Deploying with CDK

infrastructure is in javascript so for adding your lambda to be deployed along with infrastructure. add it in [lambda-stack](./lib/infrastructure/lambda-stack.js)

Before running cdk commands, make sure to build the code.
