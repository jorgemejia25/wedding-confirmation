import { Controller, Post, UseGuards, Body, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(@Body() body: { username: string; password: string }) {
    return this.authService.signin(body.username, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async checkAccess(): Promise<any> {
    return {
      success: true,
    };
  }
}
