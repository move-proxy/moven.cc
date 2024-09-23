exports.handler = async (event, context) => {
  // Get username and password from the environment variables
  const validUsername = process.env.VALID_USERNAME;
  const validPassword = process.env.VALID_PASSWORD;

  // Parse the body of the request (sent from the frontend)
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
