import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ContactService } from "./contact.service";

@Controller("api/contact")
export class ContactController {
    
    constructor(private readonly contactService: ContactService) {}
    
    @Get("/all")
    async getContacts() {
        return this.contactService.getContacts();
    }

    @Get("/:id")
    async getContactsById(@Param('id', ParseIntPipe) id: number) {
        return this.contactService.getContactsById(id);
    }
}