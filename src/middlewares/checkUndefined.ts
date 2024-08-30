import { Request, Response, NextFunction } from 'express';

export const checkUndefined = (req: Request, res: Response, next: NextFunction) => {
  // Guardamos la referencia original de res.json
  console.log(res.json)
  if(res.json==undefined) {
    console.log("Entrando al middleware")
    return res.status(404).json({ message: 'Resource not found' });}

  next();
};

