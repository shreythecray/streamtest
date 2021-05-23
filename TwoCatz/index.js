const fetch = require('node-fetch');

async function getcatpic(name) {
        let resp = await fetch("https://cataas.com/cat/cute/says/" + name, {
            method: 'GET'
        });

        let data = await resp.arrayBuffer()
        // we need to receive it as a buffer since this is an image we are receiving from the API
        // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob

        base64data = Buffer.from(data).toString('base64')
        //put what you want to turn into base64 inside "original data"
        //"originaldata" will be encoded in base64.

        return base64data;
}

module.exports = async function (context, req) {
    let names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"];
    var random_value1 = Math.floor(names.length * Math.random())
    var random_value2 = Math.floor(names.length * Math.random())
    
    var resultname1 = names[random_value1]
    var resultname2 = names[random_value2]

    let names_return = [resultname1, resultname2];

    let cat_1 = await getcatpic(resultname1);
    let cat_2 = await getcatpic(resultname2);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            cat1: cat_1,
            cat2: cat_2,
            names: names_return
        }
    };
}