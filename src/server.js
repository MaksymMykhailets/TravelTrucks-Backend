import express from 'express';
import cors from 'cors';
import router from './routes/campersRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const PORT = process.env.PORT || 5001;

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use('/api/campers', router);

  app.use('*', notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
