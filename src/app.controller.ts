import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookControllers {
  // NestJs provided with the object
  constructor(private bookService: BookService) {}

  //add book
  @Post('/add')
  addbook(): string {
    return this.bookService.addbook();
  }

  //delete book
  @Delete('/delete')
  deletebook(): string {
    return this.bookService.deletebook();
  }

  //update book
  @Put('/update')
  updatebook(): string {
    return this.bookService.updatebook();
  }

  //find all book
  @Get('/findAll')
  findAllbooks(): string {
    return this.bookService.findAllbooks();
  }
}
