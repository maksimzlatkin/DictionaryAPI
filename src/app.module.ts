import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictionaryController } from './dictionary/dictionary.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, DictionaryController],
  providers: [AppService],
})
export class AppModule {}
