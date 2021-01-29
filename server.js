const express = require("express");
const path = require("path");
const app = express();

console.log("Weird");
app.use(express.static(__dirname + "/dist/webgameengine"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/webgameengine/index.html"));
});

app.listen(process.env.PORT || 8080);
