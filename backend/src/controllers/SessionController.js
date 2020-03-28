const connection = require('../database/connection.js');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('tb_ong')
                            .where('id', id)
                            .select('name')
                            .first();
        
        if(!ong) {
            return response.status(400).json({ error: 'No ONG status with this ID' });
        }

        return response.json(ong);
    }
}