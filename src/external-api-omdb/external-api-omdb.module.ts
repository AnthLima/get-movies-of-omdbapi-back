import { Module } from '@nestjs/common';
import { ExternalApiOmdbService } from './external-api-omdb.service';
import { ExternalApiOmdbController } from './external-api-omdb.controller';

@Module({
  providers: [ExternalApiOmdbService],
  controllers: [ExternalApiOmdbController]
})
export class ExternalApiOmdbModule {}
