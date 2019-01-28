import { TestBed } from '@angular/core/testing';

import { CanDeactiveGuardService } from './can-deactive-guard.service';

describe('CanDeactiveGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanDeactiveGuardService = TestBed.get(CanDeactiveGuardService);
    expect(service).toBeTruthy();
  });
});
