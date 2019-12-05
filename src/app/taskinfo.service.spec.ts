import { TestBed } from '@angular/core/testing';

import { TaskinfoService } from './taskinfo.service';

describe('TaskinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskinfoService = TestBed.get(TaskinfoService);
    expect(service).toBeTruthy();
  });
});
