import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {
  constructor(private http: HttpClient) {}

  getOnlineMsg(): Observable<boolean> {
    return this.http.get<boolean>('connection-status');
  }
}
