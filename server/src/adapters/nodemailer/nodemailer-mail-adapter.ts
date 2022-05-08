import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "59a27deb7c025e",
      pass: "f455b3f11d7493"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject,body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Mateus Borges <mateusborges090@gmail.com>',
            subject,
            html: body,
        });
    };
}