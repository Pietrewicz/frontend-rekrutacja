import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskStatusComponent } from '../../components/task-status/task-status.component';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'task-details-view',
  imports: [TaskStatusComponent, DatePipe, CommonModule],
  templateUrl: './task-details-view.component.html',
  styleUrl: './task-details-view.component.css',
})
export class TaskDetailsViewComponent {
  @Input() task: Task | null = null;
  @Input() onClose?: () => void;
  @Input() screenIsMobile: boolean = false;
}
