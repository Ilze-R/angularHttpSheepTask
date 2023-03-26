import { TestBed } from '@angular/core/testing';

import { SheepServiceService } from './sheep-service.service';

describe('SheepServiceService', () => {
  let service: SheepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
