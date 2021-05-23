module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const password = (req.query.password);
    const responseMessage = password
        ? "Hello, " + password + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    let response_password;
    if (password === "letmein") {
        response_password = "Access granted.";
    } else {
        response_password = "Access denied.";
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response_password
    };
}