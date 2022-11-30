const { default: nodeTest } = require('node:test')
const { createTransport } = require('nodemailer')

let mailTransporter = nodemailer.createTransport( {
    service: 'gmail',
    auth: {
        user: 'kenuginge@gmail.com',
        pass: 'Bu1!dance'
    }
});

let mailDetails = {
    to: 'kenuginge@gmail.com'
}

nodemailer.createTransport()
mailTransporter.sendMail()
require('nodemailer')
mailDetails()

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'kenuginge@gmail.com',
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });

// Exporting the sendmail
module.exports = sendMail;
}