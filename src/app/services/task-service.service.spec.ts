import { TestBed } from '@angular/core/testing';

import { TaskService } from '../services/task.service';

describe('TaskServiceService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
