const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send("response");
});


app.listen(PORT, () => console.log(`listening on port ${PORT}`));