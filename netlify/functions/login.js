exports.handler = async (event, context) => {
    // Check if the request is a POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    // Get username and password from environment variables
    const validUsername = process.env.VALID_USERNAME;
    const validPassword = process.env.VALID_PASSWORD;

    // Parse the body of the request
    const { username, password } = JSON.parse(event.body);

    // Check credentials
    if (username === validUsername && password === validPassword) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Login successful!' }),
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: 'Invalid username or password!' }),
        };
    }
};
