import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ServerConnectionComponent } from './server-connection/server-connection.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        ServerConnectionComponent,
      ],
      providers: [
        HttpClient,
        HttpHandler,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
