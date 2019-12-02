import { TestBed } from '@angular/core/testing';

import { FioService } from './fio.service';

describe('FioListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FioService = TestBed.get(FioService);
    expect(service).toBeTruthy();
  });
});
