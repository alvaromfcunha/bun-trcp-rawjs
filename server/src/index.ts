import cors from '@elysiajs/cors'
import { trpc } from '@elysiajs/trpc'
import { Elysia } from 'elysia'
import { router } from './trpc'
import swagger from '@elysiajs/swagger'

const app = new Elysia()
    .use(cors())
    .use(swagger())
    .get('/', () => ({ success: true }))
    .use(trpc(router))
    .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)