import { TestBed, inject } from '@angular/core/testing';

import { ConexionService } from './conexion.service';

describe('ConexionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConexionService]
    });
  });

  it('should be created', inject([ConexionService], (service: ConexionService) => {
    expect(service).toBeTruthy();
  }));
});
