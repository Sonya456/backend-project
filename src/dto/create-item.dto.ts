import { IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  description: string;
}
