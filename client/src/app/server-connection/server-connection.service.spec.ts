import { TestBed } from '@angular/core/testing';
import { ServerConnectionService } from './server-connection.service';

describe('ServerConnectionService', () => {
  let service: ServerConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
    service = TestBed.inject(ServerConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
