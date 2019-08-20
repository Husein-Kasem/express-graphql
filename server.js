const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");

const app = express();

// Allow CORS
app.use(cors());

// redirecting any request to the "/graphql" path to the graphql server
app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.warn(`server running on port ${PORT}`);
});
