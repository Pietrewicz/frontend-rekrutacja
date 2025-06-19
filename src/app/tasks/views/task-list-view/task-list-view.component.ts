import { Component, signal } from '@angular/core';
import { Task, TaskStatus } from '../../models/task';
import { TaskDetailsViewComponent } from '../task-details-view/task-details-view.component';
import { TaskListItemComponent } from '../../components/task-list-item/task-list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-list-view',
  imports: [TaskDetailsViewComponent, TaskListItemComponent, CommonModule],
  templateUrl: './task-list-view.component.html',
  styleUrl: './task-list-view.component.css',
})
export class TaskListViewComponent {
  selectedTask = signal<Task | null>(null);
  tasks: Task[] = [
    {
      id: 1,
      title: 'Weryfikacja faktury COMP-2024/156',
      description:
        'Sprawdzenie zgodności faktury od dostawcy komputerów z zamówieniem. Weryfikacja cen, ilości i specyfikacji sprzętu.',
      status: TaskStatus.IN_PROGRESS,
      time: '45 min',
      dueDate: new Date(2025, 6, 19),
      user: {
        name: 'Anna Kowalczyk',
        avatar: 'av5_w.JPG',
      },
    },
    {
      id: 2,
      title: 'Aktualizacja danych klienta KL-445',
      description:
        'Aktualizacja adresu i danych kontaktowych klienta po przeprowadzce. Synchronizacja z systemem CRM i modułem wysyłek.',
      status: TaskStatus.TO_DO,
      time: '1h 45min',
      dueDate: new Date(2025, 6, 22),
      user: {
        name: 'Marcin Nowak',
        avatar: 'av1.JPG',
      },
    },
    {
      id: 3,
      title: 'Inwentaryzacja magazynu - sektor A',
      description:
        'Przeprowadzenie inwentaryzacji fizycznej w sektorze A magazynu. Sprawdzenie zgodności stanów magazynowych z systemem.',
      status: TaskStatus.COMPLETED,
      time: '3h 30min',
      dueDate: new Date(2025, 6, 14),
      user: {
        name: 'Katarzyna Wiśniewska',
        avatar: 'av6_w.JPG',
      },
    },
    {
      id: 4,
      title: 'Generowanie raportu sprzedaży Q2',
      description:
        'Przygotowanie raportu sprzedaży za Q2 2024 dla zarządu. Analiza wyników, porównanie z poprzednim kwartałem.',
      status: TaskStatus.IN_PROGRESS,
      time: '2h 45min',
      dueDate: new Date(2025, 6, 10),
      user: {
        name: 'Tomasz Grabowski',
        avatar: 'av2.JPG',
      },
    },
    {
      id: 5,
      title: 'Konfiguracja nowego użytkownika',
      description:
        'Utworzenie konta dla nowego pracownika działu HR. Przydzielenie uprawnień i dostępów do modułów systemu.',
      status: TaskStatus.TO_DO,
      time: '30 min',
      dueDate: new Date(2025, 7, 1),
      user: {
        name: 'Marek Kowalski',
        avatar: 'av3.JPG',
      },
    },
    {
      id: 6,
      title: 'Rozliczenie delegacji zagranicznych',
      description:
        'Rozliczenie kosztów delegacji do Niemiec. Przeliczenie walut, weryfikacja dokumentów podróży i wydatków.',
      status: TaskStatus.IN_PROGRESS,
      time: '1h 45min',
      dueDate: new Date(2025, 6, 22),
      user: null,
    },
    {
      id: 7,
      title: 'Backup bazy danych systemu',
      description:
        'Wykonanie cotygodniowego backupu bazy danych. Weryfikacja integralności kopii zapasowej.',
      status: TaskStatus.COMPLETED,
      time: '1h 20min',
      dueDate: new Date(2025, 6, 10),
      user: {
        name: 'Paweł Janowski',
        avatar: 'av4.JPG',
      },
    },
  ];

  clearSelectedTask = () => this.selectedTask.set(null);

  selectTask(task: Task) {
    this.selectedTask.set(task);
  }
}
