import { TestBed } from '@angular/core/testing';

import { GetserviceService } from './getservice.service';

describe('GetserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetserviceService = TestBed.get(GetserviceService);
    expect(service).toBeTruthy();
  });
});
