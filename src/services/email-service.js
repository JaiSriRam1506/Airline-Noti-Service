const {TicketRepository}=require('../repositories')
const {StatusCodes}=require('http-status-codes')

const mailSender=require('../config/email-config');
const AppError = require('../utils/error/app-error');
const {Enum}=require('../utils/common');
const {PENDING,SUCCESS,FAILED}=Enum.TICKET_STATUS_ENUMS;

const ticketRepo=new TicketRepository();

async function sendMail(mailFrom,mailTo,subject,text){
    try {
        const response= await mailSender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:subject,
            text:text
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
        throw error;
        //throw new AppError('Couldn\'t able to send Email',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function createTicket(data){
    try {
        const response=await ticketRepo.create(data);
        return response;
    } catch (error) {
        throw new AppError('Couldn\'t able to create Ticket',StatusCodes.INTERNAL_SERVER_ERROR)
    }  
}

async function getPendingEmails(){
    try {
        const emails=await ticketRepo.getAllTicket(PENDING)
        return emails;
    } catch (error) {
        throw new AppError('Couldn\'t get Pending Tickets',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

module.exports={
    sendMail,
    createTicket,
    getPendingEmails
}