import { Module } from '@nestjs/common';
import { UserModuleService } from './user-module.service';
import { UserModuleController } from './user-module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModuleEntity } from './entities/user-module.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserModuleEntity])],
  exports: [TypeOrmModule],
  controllers: [UserModuleController],
  providers: [UserModuleService],
})
export class UserModuleModule {}
