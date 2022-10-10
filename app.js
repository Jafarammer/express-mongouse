const express = require("express");
const cors = require("cors");
const PORT = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(`Cannot connect to database!!!`, err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to learn express mongodb",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
