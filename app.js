const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const cors = require("cors");
const l_ch = require("./routes/routes");
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/l_ch", l_ch);

app.get("*", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
