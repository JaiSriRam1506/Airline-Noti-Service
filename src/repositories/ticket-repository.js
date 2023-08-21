const CrudRepository = require('./crud-repository');

const {Ticket}=require('../models')

class TicketRepository extends CrudRepository{
    constructor(){
        super(Ticket)
    }

    async getAllTicket(status){
        const tickets= await Ticket.findAll({
            where:{
                status:status
            }
        });
        return tickets;
    }
}

module.exports=TicketRepository;