import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ProfileService } from "./profile.service";

@Controller("api/user")
export class ProfileController {

    constructor(private readonly profileService: ProfileService) {}

    @Get("profiles")
    async getProfile() {
        return this.profileService.getProfile();
    }

    @Get("profile/:id")
    async getProfileById(@Param('id', ParseIntPipe) id: number) {
        return this.profileService.getProfileById(id);
    }
}
