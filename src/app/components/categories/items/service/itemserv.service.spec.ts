import { TestBed } from '@angular/core/testing';

import { ItemservService } from './itemserv.service';

describe('ItemservService', () => {
  let service: ItemservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
