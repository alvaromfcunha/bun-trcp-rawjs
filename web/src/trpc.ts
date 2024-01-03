import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { Router } from '@server-trpc'

export const createClient = () => createTRPCProxyClient<Router>({
    links: [
        httpBatchLink({ url: 'http://localhost:3000/trpc' })
    ]
})