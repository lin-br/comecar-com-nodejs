module.exports = {
    async index(request, response) {
        return response.json('{"mensagem":"Olá!"}');
    },
};