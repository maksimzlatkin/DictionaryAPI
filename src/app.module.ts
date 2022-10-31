import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SquareController } from './math/math.controller';
import { SquareRootController } from './math/math.controller';

@Module({
  imports: [],
  controllers: [AppController, SquareController, SquareRootController],
  providers: [AppService],
})
export class AppModule {}
