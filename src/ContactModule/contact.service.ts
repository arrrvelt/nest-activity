import { Injectable } from "@nestjs/common";

@Injectable()
export class ContactService {
    private contacts = [
        {
            id: 1,
            contact_type: "EMAIL",
            contact_category: "PERSONAL",
            contact_value: "juandelacruz@gmail.com",
            user_id: 1,
            created_at: "2024-18-2024 08:00:00",
            created_by: "SYSTEM",
        },
        {
            id: 2,
            contact_type: "MOBILE",
            contact_category: "PERSONAL",
            contact_value: "09123456789",
            user_id: 2,
            created_at: "2024-18-2024 08:00:00",
            created_by: "SYSTEM",
        },
        {
            id: 3,
            contact_type: "PHONE",
            contact_category: "WORK",
            contact_value: "(038)4112222",
            user_id: 3,
            created_at: "2024-18-2024 08:00:00",
            created_by: "SYSTEM",
        },
        {
            id: 4,
            contact_type: "EMAIL",
            contact_category: "WORK",
            contact_value: "regine.velasquez@gma.tv",
            user_id: 4,
            created_at: "2024-18-2024 08:00:00",
            created_by: "SYSTEM",
        },
        {
            id: 5,
            contact_type: "MOBILE",
            contact_category: "WORK",
            contact_value: "09987654321",
            user_id: 5,
            created_at: "2024-18-2024 08:00:00",
            created_by: "SYSTEM",
        },

    ]

    async getContacts() {
        return this.contacts;
    }

    async getContactsById(id: number) {
        return this.contacts.find(contacts => contacts.id === id);
    }
}