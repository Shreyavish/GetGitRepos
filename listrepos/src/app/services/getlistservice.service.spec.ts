import { TestBed } from '@angular/core/testing';

import { GetlistserviceService } from './getlistservice.service';

describe('GetlistserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetlistserviceService = TestBed.get(GetlistserviceService);
    expect(service).toBeTruthy();
  });
});
