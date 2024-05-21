import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async getBookById(id: string): Promise<Book> {
    const book = await this.bookModel.findOne({ id }).exec();
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }



  async searchBooksByName(name: string): Promise<string[]> {
    const regex = new RegExp(`\\b${name}\\b`, 'iu');
    const books = await this.bookModel.find({ name: regex }).exec();
    return books.map(book => book.id);
  }


  async findAll() : Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
