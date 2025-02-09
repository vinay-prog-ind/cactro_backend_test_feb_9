const app = require('./index');

require('dotenv').config();

app.listen(process.env.PORT, () => console.log(`listening on localhost:${process.env.PORT}`));