// nodemailer form submit 1

const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth:{
        user: "akashgole.cub@gmail.com",
        pass: "skbtvebyhnwoiqen"
    }
})


let details = {
    from: "akashgole.cub@gmail.com",
    to: "akashgole.cub@gmail.com",
    subject: "testing our nodemailer",
    text: "testing our first sender"
}

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("it has an error",err)
    }
    else{
        console.log("email has sent!")
    }
})


// nodemailer form submit 2
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(3001, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth:{
//         user: "akashgole.cub@gmail.com",
//         pass: "skbtvebyhnwoiqen"
//     }
//   });

//   contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

//   router.post("/contact", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const number = req.body.number;
//     const message = req.body.message;
//     const mail = {
//       from: name,
//       to: "akashgole.cub@gmail.com",
//       subject: "Contact Form Submission",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Number: ${number}</p>
//              <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "ERROR" });
//       } else {
//         res.json({ status: "Message Sent" });
//       }
//     });
//   });


// nodemailer form submit 3
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const { response } = require('express');

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(cors());

// app.get('/',()=>{
//     resizeBy.send('welcome to my forma')
// });

// app.post('/api/forma',(req,res)=>{

//     let data = req.body
//     let smtpTransport = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth:{
//             user:'akashgole.cub@gmail.com',
//             pass:'skbtvebyhnwoiqen'
//         }
//     })


//     let mailOptions={
//         from:data.email,
//         to:'akashgole.cub@gmail.com',
//         subject:'message from coviswift',
//         html:`
//             <p>Name: ${data.name}</p>
//             <p>Email: ${data.email}</p>
//             <p>Number: ${data.number}</p>
//             <p>Message: ${data.message}</p>
//         `
//     };

//     smtpTransport.sendMail(mailOptions,(error,response)=>{
//         if(error){
//             res.send(error)
//         }
//         else{
//             res.send('Success')
//         }
//     })

//     smtpTransport.close();

// });


// const PORT = process.env.PORT||3000;
// app.listen(PORT,()=>{
//     console.log(`server starting at port ${PORT}`);
// })




