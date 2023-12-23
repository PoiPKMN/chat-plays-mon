import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from './server-connection.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-server-connection',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ServerConnectionService,
  ],

  templateUrl: './server-connection.component.html',
  styleUrl: './server-connection.component.scss'
})
export class ServerConnectionComponent implements OnInit {
  isLoading$!: Observable<boolean>;

  constructor(private serverConnectionService: ServerConnectionService) {}

  ngOnInit(): void {
    this.isLoading$ = this.serverConnectionService.getOnlineMsg();
  }
}
