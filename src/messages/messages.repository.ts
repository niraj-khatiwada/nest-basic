import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

import { doesFileExist } from 'src/utils/filesystem';

@Injectable()
export class MessagesRepository {
  private filePath = path.join(__dirname, 'text.json');

  async findAll() {
    if (!(await doesFileExist(this.filePath))) {
      return '';
    }
    const content = fs.readFile(this.filePath, 'utf-8');
    return content;
  }

  async findOne(id: string) {
    return `Hello World ${id}`;
  }

  async create(content: string) {
    if (!(await doesFileExist(this.filePath))) {
      await fs.writeFile(this.filePath, '', 'utf-8');
    }
    const json = await fs.readFile(path.join(__dirname, 'text.json'), 'utf-8');
    fs.writeFile(this.filePath, json.concat(`${content}\n`), 'utf-8');
  }
}
