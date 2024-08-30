import express from 'express';
import userRouter from './routes/user-rt';
import { checkUndefined } from './middlewares/checkUndefined';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/user',userRouter)

//middlewares
app.use(checkUndefined)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
