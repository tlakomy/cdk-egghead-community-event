import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apiGateway from "@aws-cdk/aws-apigateway";

export class CommunityCdkEventStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const helloLambda = new lambda.Function(this, "lambdaFunction", {
            code: lambda.Code.asset("lambda"),
            handler: "hello.handler",
            runtime: lambda.Runtime.NODEJS_12_X,
            timeout: cdk.Duration.seconds(10),
            memorySize: 256,
            environment: { SECRET_DB_KEY: "password1" }
        });

        new apiGateway.LambdaRestApi(this, "myendpoint", {
            handler: helloLambda
        });
    }
}
