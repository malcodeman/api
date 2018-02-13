const app = require('./index');
const routes = require('./routes/routes');

const PORT = process.env.PORT || 3001;

routes(app);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));