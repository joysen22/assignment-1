const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/random.user.route");

// server PORT
const PORT = process.env.PORT || 7000;
// app user external middleware
app.use(cors());
// app user enternal middleware
app.use(express.json());

//app use route api
app.use("/user", userRouter);
// route api
app.get("/", (req, res) => {
  res.send("server running");
});

// server running
app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
