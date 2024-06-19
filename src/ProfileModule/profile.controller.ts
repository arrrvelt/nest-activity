import { Controller, Get } from "@nestjs/common";
import { ProfileService } from "./profile.service";

@Controller("api")
export class ProfileController {

    constructor(private readonly profileService: ProfileService) {}

    @Get("/user")
    async getProfile() {
        return this.profileService.getProfile();
    }
}