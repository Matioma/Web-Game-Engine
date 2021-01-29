const express = require("express");
const path = require("path");
const app = express();

console.log("Weird");
app.use(express.static(__dirname + "/dist/web-game-engine"));

app.get("/*", (req, res) => {
  res.send("COOl");
  //   res.sendFile(path.join(__dirname + "/dist/web-game-engine/index.html"));
});

app.listen(process.env.PORT || 8080);
