type User = {
    id: number
    name: string
}

const users: User[] = [
    {
        id: 1,
        name: 'Joao'
    },
    {
        id: 2,
        name: 'Alvaro'
    },
    {
        id: 1,
        name: 'Jeferson'
    }
]

export function getAllUsers() {
    return users
}