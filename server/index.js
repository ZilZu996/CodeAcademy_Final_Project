import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "./controllers/users.js";

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.get("/users", getUsers);
app.post("/user", createUser);
app.get("/user/:id", getUser);
app.delete("/user/:id", deleteUser);
app.put("/user/:id", updateUser);

app.listen(port, () =>
  console.log(`Server is listening on port: http://localhost:${port}`)
);
