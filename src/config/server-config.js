const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    GMAIL_EMAIL:process.env.GMAIL_EMAIL,
    GMAIL_PASS:process.env.GMAIL_APP_PASS,
    MESSAGE_QUEUE:process.env.MESSAGE_QUEUE
}