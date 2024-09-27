// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import routes from './routes';

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// // applying the routes to the basepath '/api'
// app.use('/api', routes);

// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Listening on http://localhost:${port}`)
// })

import app from "./app";
// get the port from the environment variable or use 3000
const port = 3000;
app.listen(port, () =>
  console.log(`App is listening on http://localhost:${port}`)
);