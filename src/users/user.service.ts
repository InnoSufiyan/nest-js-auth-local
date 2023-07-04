/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';


@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: 'user',
            password: 'changeme',
            email: 'user@mail.com'
        },
        {
            username: 'user2',
            password: 'changeme',
            email: 'user2@mail.com'
        },
        {
            username: 'user3',
            password: 'changeme',
            email: 'user3@mail.com'
        },
    ]

    getUserByName(userName: string) : User {
        return this.users.find(user=> user.username === userName)
    }
}