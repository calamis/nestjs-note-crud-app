import { Injectable } from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NoteService {
  create(createNoteDto: CreateNoteDto) {
    return `Note Service create a new note ${createNoteDto}`;
  }
  findAll() {
    return 'Note Service return all note';
  }
  findOne(id: number) {
    return `Note Service get a specific note by ID ${id}`;
  }
  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `Note Service update note by ID ${id} ${updateNoteDto}`;
  }
  remove(id: number) {
    return `Note Service remove a note by ID ${id}`;
  }
}
