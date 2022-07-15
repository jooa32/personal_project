/* session\mongo\mongo_session.js */
const app = require('express')();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    url: "mongodb://localhost/test",
    collection: "sessions"
  })
}));
app.get('/', (req, res) => {
  if(!req.session.num) {
    req.session.num = 1;
  } else {
    req.session.num += 1;
  }
  res.send('Hello ' + req.session.num);
});
app.listen(3000, () => {
console.log('listening 3000port');
});