import { TestBed } from '@angular/core/testing';

import { AddEditTaskService } from './add-edit-task.service';

describe('AddEditTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEditTaskService = TestBed.get(AddEditTaskService);
    expect(service).toBeTruthy();
  });
});
