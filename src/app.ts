// App typescript

import express from 'express';
import bodyParser from 'body-parser';
import { setReviewRoutes } from './routes/reviewRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

setReviewRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
