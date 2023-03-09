import { Test, TestingModule } from '@nestjs/testing';
import { ExternalApiOmdbController } from './external-api-omdb.controller';

describe('ExternalApiOmdbController', () => {
  let controller: ExternalApiOmdbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalApiOmdbController],
    }).compile();

    controller = module.get<ExternalApiOmdbController>(ExternalApiOmdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
