import { TestBed } from '@angular/core/testing';

import { WbApiService } from './wb-api.service';

describe('WbApiService', () => {
  let service: WbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
