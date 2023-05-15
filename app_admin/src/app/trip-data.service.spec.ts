import { TestBed } from '@angular/core/testing';

import { TripDataService } from '../../../app_admin/services/trip-data.service';

describe('TripDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripDataService = TestBed.get(TripDataService);
    expect(service).toBeTruthy();
  });
});
