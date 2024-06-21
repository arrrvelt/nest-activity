import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


// @Entity({ name: "user_entity"})
@Entity()
export class UserModuleEntity {

    @PrimaryGeneratedColumn()
    @Column({name: "id"})
    id: number;

    @Column({name: "first_name"})
    firstname: string;

    @Column({name: "last_name"})
    lastname: string;

    @Column({name: "age"})
    age: number;

    @Column({name: "avatar"})
    avatar: string;

    @Column({name: "gender"})
    gender: string;

    @Column({name: "created_at"})
    created_at: string;

    @Column({name: "created_by"})
    created_by: string;

}
