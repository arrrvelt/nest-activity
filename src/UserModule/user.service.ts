import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {

    async getUsers() {
        return [
            {
                firstname: "Velt",
                age: 10
            },
            {
                firstname: "Roose",
                age: 12
            }
        ]
    }

    async 


}