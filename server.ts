//import express from 'express';
import app from "./src/app";

//const server = express();
const port = 8080;

/*server.get('/', async (req, res) => {
    res.send("hello world!")
})*/

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


