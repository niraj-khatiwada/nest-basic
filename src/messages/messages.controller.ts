import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateMessageDTO } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  async getMessages() {
    return await this.messagesService.findAll();
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDTO) {
    const { content } = body;
    await this.messagesService.create(content);
    return { success: true };
  }

  @Get('/:id')
  async getMessage(@Param() { id }: { id: string }) {
    return await this.messagesService.findOne(id);
  }
}
