const { departments, Sequelize } = require('../models')
const t = require('../helpers/transactions');
const Create = async (req, res) => {
    //try {
        /*const { data } = req.body;
        // create transaction
        const transaction = await t.create();
        if (!transaction.status && transaction.error) {
            throw transaction.error;
        }*/
        const Createdep = await Person.bulkCreate(data, { transaction: transaction.data });
        if (!Createdep) {
            // rollback transaction
            await t.rollback(transaction.data);
            res.status(400).send({
                status: 'error',
                message: 'dep failed created'
            });
        }
        // commit transaction
        const commit = await t.commit(transaction.data);
        if (!commit.status && commit.error) {
            throw commit.error;
        }

        res.status(201).send({
            status: 'success',
            //data: 
        });
    } /*catch (error) {
        res.send(error);
    }*/
//}
module.exports=Create;