import { Component, Input } from '@angular/core';
import { TaskStatus } from '../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-status',
  imports: [CommonModule],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.css',
})
export class TaskStatusComponent {
  @Input() status: TaskStatus | undefined;
}
