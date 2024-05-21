import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { SearchBookDto } from './dto/search-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('allBooks')
  async getAllBooks() {
    return this.bookService.findAll();
  }

  @Post('searchBook')
  async searchBook(@Body() searchBookDto: SearchBookDto) {
    console.log(searchBookDto)
    const { name } = searchBookDto;
    const bookIds = await this.bookService.searchBooksByName(name);
    return { bookIds };
  }
  
  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.getBookById(id);
  }


}
