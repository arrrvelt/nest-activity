import { Injectable} from '@nestjs/common';
import { CreateUserModuleDto } from './dto/create-user-module.dto';
import { UpdateUserModuleDto } from './dto/update-user-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModuleEntity } from './entities/user-module.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserModuleEntity)
    private usersRepository: Repository<UserModuleEntity>,
  ) {}

  findAll(): Promise<UserModuleEntity[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<UserModuleEntity | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
} //Stopped here 

@Injectable()
export class UserModuleService {
  create(createUserModuleDto: CreateUserModuleDto) {
    return 'This action adds a new userModule';
  }

  findAll() {
    return `This action returns all userModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userModule`;
  }

  update(id: number, updateUserModuleDto: UpdateUserModuleDto) {
    return `This action updates a #${id} userModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} userModule`;
  }
}
