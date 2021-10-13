const dialogflow = require("dialogflow");

const projectId = process.env.PROJECT_ID;
const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;

//use this when passing keyFile path
const intentsClient = new dialogflow.IntentsClient({
  projectId,
  keyFilename,
});

//use this when storing key in system env variable
// const intentsClient = new dialogflow.IntentsClient();

async function fetchIntentList() {
  // Construct request

  // The path to identify the agent that owns the intents.
  const projectAgentPath = intentsClient.projectAgentPath(projectId);

  console.log(projectAgentPath);

  const request = {
    parent: projectAgentPath,
  };

  // Send the request for listing intents.
  const [response] = await intentsClient.listIntents(request);

  return response;
}

module.exports = fetchIntentList;
