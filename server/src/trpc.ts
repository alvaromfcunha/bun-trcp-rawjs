import { initTRPC } from '@trpc/server'

import { getAllUsers } from './controllers/user'

const t = initTRPC.create()

export const router = t.router({
    getAllUsers: t.procedure.query(getAllUsers)
})

export type Router = typeof router