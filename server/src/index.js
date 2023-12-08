import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

import {userRouter} from "./routes/User.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

mongoose.connect("mongodb+srv://amul48:amulge48100@cluster0.urjoqxs.mongodb.net/Cluster0?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3001, () => console.log("Server chal raha reh be"));

