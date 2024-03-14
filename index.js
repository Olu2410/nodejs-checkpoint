
import http from 'http'
import 'dotenv/config'
import nodemailer from 'nodemailer'

console.log("HELLO WORLD")

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end ('<h1>Hello Node!!!</h1>\n');
});

const PORT = 8080;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
    }
    });

var mailOptions = {
    from: 'olumuyiwaolu@gmail.com',
    to: 'olumuyiwa69@yahoo.com',
    subject: 'Testing Server!!',
    text: 'Heyoo, I am sending an email using Node.js'
};

transporter.sendMail(mailOptions, function(error, info){
        if (error) {
    console.log(error);
} else {
    console.log('Email sent: ' + info.response);
}
});

server.listen(PORT, () => 
    console.log(`server is running on http://localhost:${PORT}`));