// src/book/book.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.getBookById(id);
  }
}
