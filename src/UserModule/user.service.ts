import { Injectable } from "@nestjs/common";
import { ProfileService } from "src/ProfileModule/profile.service";

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