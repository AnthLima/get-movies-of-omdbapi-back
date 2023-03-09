import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ExternalApiOmdbModule } from './external-api-omdb/external-api-omdb.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ExternalApiOmdbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
