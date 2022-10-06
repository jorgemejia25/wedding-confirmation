import { Injectable, UnauthorizedException } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signin(
    username: string,
    password: string
  ): Promise<{ access_token: string }> {
    if (username == "admin" && password == "admin") {
      const payload = { username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException("Incorrect login credentials!");
    }
  }
}
