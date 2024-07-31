import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './item.entity';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Item> {
    return this.appService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.appService.create(createItemDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto): Promise<Item> {
    return this.appService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.appService.remove(id);
  }
}
