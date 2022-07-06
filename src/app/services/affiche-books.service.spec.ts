import { TestBed } from '@angular/core/testing';

import { AfficheBooksService } from './affiche-books.service';

describe('AfficheBooksService', () => {
  let service: AfficheBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficheBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
