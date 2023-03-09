import { Test, TestingModule } from '@nestjs/testing';
import { ExternalApiOmdbService } from './external-api-omdb.service';

describe('ExternalApiOmdbService', () => {
  let service: ExternalApiOmdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalApiOmdbService],
    }).compile();

    service = module.get<ExternalApiOmdbService>(ExternalApiOmdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
