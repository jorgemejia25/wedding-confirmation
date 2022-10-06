import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { Module } from "@nestjs/common";

const jwtFactory = {
  useFactory: async (configService: ConfigService) => ({
    secret: "219H88H738271H8732H8",
  }),
};

@Module({
  imports: [JwtModule.registerAsync(jwtFactory)],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
