export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  time: string; //temporary string, to change into custom type with hours and minutes
  dueDate: Date;
  user: User | null;
}

//small interface used only in Task, decided to not move it to separate file for now
export interface User {
  name: string;
  avatar: string; //temporarily just a path to assets img
}

export enum TaskStatus {
  TO_DO = 'Do zrobienia',
  IN_PROGRESS = 'W trakcie',
  COMPLETED = 'Ukończone',
}
