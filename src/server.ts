import "dotenv/config"
import { render } from "@react-email/components";
import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { Resend } from 'resend';
import { RenewCompanyEmailTemplate } from './templates/RenewCompanyEmailTemplate'
import { CreateNewPasswordEmailTemplate } from "./templates/CreateNewPasswordEmailTemplate";
import { ForgotPasswordSuccessEmailTemplate } from "./templates/ForgotPasswordSuccessEmailTemplate";
import { AddMemberSquadEmailTemplate } from "./templates/AddMemberSquadEmailTemplate";

const app = fastify()

const resend = new Resend(process.env.RESEND_KEY);

app.get('/send-email/renew-company', (request: FastifyRequest, replay: FastifyReply) => {
    const emailHtml = 
        render(RenewCompanyEmailTemplate({ 
            name: 'Melqui', 
            previewText: 'Aqui esta login, para acessar a plataforma', 
            url: 'https://Vunex.vercel.app/login' 
        }))

    resend.emails.send({
        from: 'Vunex@resend.dev',
        to: 'melqui.sodre15@gmail.com',
        subject: 'Bem vindo a Vunex',
        html: emailHtml
    })

    replay.send({ email: 'success' })
})

app.get('/send-email/forgot-password', (request: FastifyRequest, replay: FastifyReply) => {
    const emailHtml = 
        render(CreateNewPasswordEmailTemplate({ 
            name: 'Melqui', 
            previewText: 'Aqui o link para criar sua nova senha', 
            url: 'https://Vunex.vercel.app/register-new-password' 
        }))

    resend.emails.send({
        from: 'Vunex@resend.dev',
        to: 'melqui.sodre15@gmail.com',
        subject: 'Crie sua nova senha.',
        html: emailHtml
    })

    replay.send({ email: 'success' })
})

app.get('/send-email/forgot-password/success', (request: FastifyRequest, replay: FastifyReply) => {
    const emailHtml = 
        render(ForgotPasswordSuccessEmailTemplate({ 
            name: 'Melqui', 
            previewText: 'Senha alterada com sucesso!', 
            url: 'https://Vunex.vercel.app/login' 
        }))

    resend.emails.send({
        from: 'Vunex@resend.dev',
        to: 'melqui.sodre15@gmail.com',
        subject: 'Senha alterada',
        html: emailHtml
    })

    replay.send({ email: 'success' })
})

app.get('/send-email/add-member-squad', (request: FastifyRequest, replay: FastifyReply) => {
    const emailHtml = 
        render(AddMemberSquadEmailTemplate({ 
            name: 'Melqui', 
            previewText: 'Companhia alterada com sucesso!', 
            url: 'https://Vunex.vercel.app/login', 
            email: 'melqui.sodre15@gmail.com',
            password: '10203010',
            adminName: 'Lucas'
        }))

    resend.emails.send({
        from: 'Vunex@resend.dev',
        to: 'melqui.sodre15@gmail.com',
        subject: 'Companhia alterada!',
        html: emailHtml
    })

    replay.send({ email: 'success' })
})

app.listen({
    host: '0.0.0.0',
    port: 3333,
}).then(() => {
    console.log("Server running!")
})