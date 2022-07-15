import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  addbook(): string {
    return 'This will add book';
  }

  deletebook(): string {
    return 'This will delete book';
  }

  updatebook(): string {
    return 'This will Update book';
  }

  findAllbooks(): string {
    return 'This will find All books';
  }
}
