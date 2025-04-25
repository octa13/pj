const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/enviar', (req, res) => {
  const { nombre, email, telefono, domicilio, localidad } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 't.herramientasd2.0@gmail.com',
      pass: 'adlscspojupzzjit'
    }
  });

  const mailOptions = {
    from: email,
    to: 't.herramientasd2.0@gmail.com',
    subject: 'Nuevo mensaje desde el formulario',
    text: `
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      Domicilio: ${domicilio}
      Localidad: ${localidad}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo.');
    } else {
      res.status(200).send('Correo enviado con éxito.');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});