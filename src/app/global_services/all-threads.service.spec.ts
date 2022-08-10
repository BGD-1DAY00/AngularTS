import { TestBed } from '@angular/core/testing';

import { AllThreadsService } from './all-threads.service';

describe('AllThreadsService', () => {
  let service: AllThreadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllThreadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
