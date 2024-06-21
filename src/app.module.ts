import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './ProfileModule/profile.module';
import { UserModule } from './UserModule/user.module';
import { ContactModule } from './ContactModule/contact.module';
import { UserModuleModule } from './user-module/user-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModuleEntity } from './user-module/entities/user-module.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'my_database',
      entities: [UserModuleEntity],
      synchronize: false,
    }),
    ProfileModule,
    UserModule,
    ContactModule,
    UserModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private dataSource: DataSource) {}
}