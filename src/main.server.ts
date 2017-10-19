import * as express from 'express';
import { resolve } from 'path';

const app = express();
const port = process.env.port || 8300;
const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  app.use(require('connect-livereload')());
}

app.set('view engine', 'pug');
app.set('views', resolve('./templates'));
app.use('/static', express.static(resolve('static'), { index: false }));
app.get('/', (req, res) => {
  res.render('pages/home');
});

app.listen(port, () => {
  console.log(`Server running on port ${ port }`);
  if (isProd) {
    console.log('Server running in production mode');
  }
});