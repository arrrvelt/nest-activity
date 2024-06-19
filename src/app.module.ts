import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './ProfileModule/profile.module';
import { UserModule } from './UserModule/user.module';

@Module({
  imports: [
    ProfileModule,
    UserModule,
    ///ContactModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
