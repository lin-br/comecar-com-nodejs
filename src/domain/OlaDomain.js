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
    async exibirQueryParams(request, response) {
        const {teste} = request.query;
        console.log(teste);
        return response.status(200).send(teste)
    }
};