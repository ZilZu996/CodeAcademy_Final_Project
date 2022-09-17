import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import useRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/", useRoutes);

app.get("/", (req, res) => res.send("Hello from Express"));
app.all("*", (req, res) => res.send("This route does not exist"));

app.listen(port, () =>
  console.log(`Server is listening on port: http://localhost:${port}`)
);
