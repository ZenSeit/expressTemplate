import express from 'express';
import userRouter from './routes/user-rt';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/user',userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
