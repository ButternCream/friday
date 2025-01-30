import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Just check if is running
router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default router;
