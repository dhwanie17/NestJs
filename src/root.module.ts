import { Module } from '@nestjs/common';
import { BookControllers } from './app.controller';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [BookControllers],
  providers: [BookService],
})
export class RootModule {}
