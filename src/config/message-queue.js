const amqplib=require('amqplib')
const {MESSAGE_QUEUE}=require('./server-config')

const {EmailService}=require('../services')

async function sendMail(){
try {
    const connection = await amqplib.connect('amqp://localhost');
    const channel=await connection.createChannel();
    await channel.assertQueue(MESSAGE_QUEUE);
    channel.consume(MESSAGE_QUEUE,async(data)=>{
            //mailFrom,mailTo,subject,text
            const object=JSON.parse(`${Buffer.from(data.content)}`)
            console.log(`${Buffer.from(data.content)}`)
            await EmailService.sendMail('rajanikants916@gmail.com',object.recepientEmail,object.subject,object.text);
            channel.ack(data);
        })
} catch (error) {
    console.log(error);
    throw error;
}
}

module.exports={
    sendMail
}