import express from "express";
import { Greeting } from "../controller/user-ctr";

const userRouter = express.Router();

userRouter.get('/', Greeting);

export default userRouter