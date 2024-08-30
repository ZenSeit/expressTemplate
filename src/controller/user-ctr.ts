import { Request,Response } from "express";
import userSvs from "../services/user-svs";

export const Greeting=(req: Request, res: Response)=>{
    const Gretting = userSvs.registerNewUser();
    res.send(Gretting);
}

