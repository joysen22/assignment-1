const express = require("express");
const cors = require("cors");
const app = express();

// server PORT
const PORT = process.env.PORT || 7000;
// app user external middleware
app.use(cors());
// app user enternal middleware
app.use(express.json());

//app use route api
app.use("/user", require(__dirname + "./routes/random.user.route"));
// route api
app.get("/", (req, res) => {
  res.send("server running");
});

// server running
app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
