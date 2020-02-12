exports.handler = async function(event: AWSLambda.APIGatewayEvent) {
    console.log("request:", JSON.stringify(event, null, 2));
    console.log("SECRET_DB_KEY", process.env.SECRET_DB_KEY);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello, egghead friends! You've hit ${event.path}\n`
    };
};
