// src/book/entities.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Author {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  slug: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);

@Schema()
export class Categories {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  is_leaf: boolean;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);

@Schema()
export class CurrentSeller {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  sku: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  logo: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  product_id: string;

  @Prop({ required: true })
  store_id: number;

  @Prop({ required: true })
  is_best_store: boolean;

  @Prop({ type: Boolean, required: false }) // Explicitly set the type
  is_offline_installment_supported: boolean | null;
}

export const CurrentSellerSchema = SchemaFactory.createForClass(CurrentSeller);

@Schema()
export class Image {
  @Prop({ required: true })
  base_url: string;

  @Prop({ required: true })
  is_gallery: boolean;

  @Prop({ required: false })
  label: string;

  @Prop({ required: true })
  large_url: string;

  @Prop({ required: true })
  medium_url: string;

  @Prop({ required: false })
  position: string;

  @Prop({ required: true })
  small_url: string;

  @Prop({ required: true })
  thumbnail_url: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);

@Schema()
export class QuantitySold {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  value: number;
}

export const QuantitySoldSchema = SchemaFactory.createForClass(QuantitySold);

@Schema()
export class Attribute {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  value: string;
}

export const AttributeSchema = SchemaFactory.createForClass(Attribute);

@Schema()
export class Specification {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [AttributeSchema], required: true })
  attributes: Attribute[];
}

export const SpecificationSchema = SchemaFactory.createForClass(Specification);

@Schema()
export class Book {
  @Prop({ type: [AuthorSchema], required: false })
  authors?: Author[];

  @Prop({ required: true })
  book_cover: string;

  @Prop({ type: CategoriesSchema, required: true })
  categories: Categories;

  @Prop({ type: CurrentSellerSchema, required: true })
  current_seller: CurrentSeller;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [ImageSchema], required: true })
  images: Image[];

  @Prop({ required: true })
  list_price: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  original_price: number;

  @Prop({ type: QuantitySoldSchema, required: false })
  quantity_sold?: QuantitySold;

  @Prop({ required: true })
  rating_average: number;

  @Prop({ required: true })
  short_description: string;

  @Prop({ type: [SpecificationSchema], required: true })
  specifications: Specification[];

  @Prop({ required: true })
  id: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
