import express from 'express';
import router from './router';
import config from './config';

const app = express();
const port = config.port || 3000;

app.use('/', router);

app.listen(port, () => console.log(`App listening at port ${port}`));
