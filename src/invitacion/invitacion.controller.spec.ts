import { Test, TestingModule } from '@nestjs/testing';
import { InvitacionController } from './invitacion.controller';

describe('InvitacionController', () => {
  let controller: InvitacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvitacionController],
    }).compile();

    controller = module.get<InvitacionController>(InvitacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
