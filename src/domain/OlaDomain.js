module.exports = {
    async index(request, response) {
        return response.json('{"mensagem":"Olá!"}');
    },
    async store(request, response) {
        console.log(request.body);
        return response.status(201).send(request.body);
    }
};