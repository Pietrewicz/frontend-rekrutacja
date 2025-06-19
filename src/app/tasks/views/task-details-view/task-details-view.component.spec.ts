import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsViewComponent } from './task-details-view.component';

describe('TaskDetailsViewComponent', () => {
  let component: TaskDetailsViewComponent;
  let fixture: ComponentFixture<TaskDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
