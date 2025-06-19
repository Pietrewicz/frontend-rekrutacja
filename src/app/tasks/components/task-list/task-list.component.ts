import { Component, Input, signal } from '@angular/core';
import { Task } from '../../models/task';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';

@Component({
  selector: 'task-list',
  imports: [TaskListItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  selectedTask = signal<Task | null>(null);

  selectTask(task: Task) {
    this.selectedTask.set(task);
  }
}
