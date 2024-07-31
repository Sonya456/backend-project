import { IsString } from 'class-validator';

export class UpdateItemDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  description: string;
}
