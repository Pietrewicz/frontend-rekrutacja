import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-list-item',
  imports: [CommonModule],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css',
})
export class TaskListItemComponent {
  @Input() task: Task | null = null;
  @Input() isSelected: boolean = false;
}
