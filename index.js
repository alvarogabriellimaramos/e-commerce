const express = require('express');
const app = express();


app.get('/',function(request,response) {
    return response.status(200).send('Sucesso')
});

app.listen(8080,console.log(`Server Running`));