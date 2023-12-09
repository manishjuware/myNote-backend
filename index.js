const connectToMongo = require("./database");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
connectToMongo();

const app = express();
const port = process.env.PORT;

//* express.json() is a built-in middleware function in Express
//* used to parse the incoming requests with JSON payloads
app.use(express.json());
app.use(cors());
//* Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
    console.log(`myNote backend listening on port ${port}`);
});
