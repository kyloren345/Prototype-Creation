const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'shiranginige@gmail.com',
  from: 'kenuginige@gmail.com', // Use the email address or domain you verified above
  subject: 'Email',
  text: 'Here is the email addresses ',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();