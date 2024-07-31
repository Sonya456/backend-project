import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('items')
  findAll(): Promise<Item[]> {
    return this.appService.findAll();
  }

  @Get('items/:id')
  findOne(@Param('id') id: number): Promise<Item> {
    return this.appService.findOne(id);
  }

  @Post('items')
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.appService.create(createItemDto);
  }

  @Put('items/:id')
  update(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto): Promise<Item> {
    return this.appService.update(id, updateItemDto);
  }

  @Delete('items/:id')
  remove(@Param('id') id: number): Promise<void> {
    return this.appService.remove(id);
  }
}
