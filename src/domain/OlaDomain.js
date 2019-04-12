module.exports = {
    async index(request, response) {
        return response.json('{"mensagem":"Olá!"}');
    },
    async store(request, response) {
        console.log(request.body);
        return response.status(201).send(request.body);
    },
    async show(request, response) {
        console.log(request.params.id);
        return response.status(200).send(request.params.id);
    },
};