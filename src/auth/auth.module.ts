import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.strategy';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PassportLocalStrategy],
})
export class AuthModule {}
