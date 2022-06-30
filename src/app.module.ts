import { Module } from '@nestjs/common';
import { NoteModule } from './notes/notes.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [NoteModule, StudentModule],
})
export class AppModule {}
