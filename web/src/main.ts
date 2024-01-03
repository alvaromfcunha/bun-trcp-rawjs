import { raw } from '@squaresapp/rawjs'

import { createClient } from './trpc.ts'

const component = raw.div(
  raw.h1(
    raw.text`Bun + TRPC (Elysia) + RawJS`
  ),
  raw.button(
    {
      type: 'button',
      height: '100px',
      width: '100px',
      backgroundColor: 'gray'
    },
    raw.on('click', fetchUsers)
  )
)

async function fetchUsers() {
  const client = createClient()
  const users = await client.getAllUsers.query()

  console.log(users)
}

document.getElementById('app')?.append(component)