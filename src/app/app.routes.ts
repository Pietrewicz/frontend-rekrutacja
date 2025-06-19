import { Routes } from '@angular/router';
import { TaskListViewComponent } from './tasks/views/task-list-view/task-list-view.component';

export const routes: Routes = [
  {
    path: '',
    component: TaskListViewComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
