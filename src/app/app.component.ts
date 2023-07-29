import { Component, OnInit } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  servers: Server[] = [
    { instanceType: 'medium', name: 'Production Server', status: 'stable', started: new Date(15, 1, 2017) },
    { instanceType: 'large', name: 'User Database', status: 'stable', started: new Date(15, 1, 2017) },
    { instanceType: 'small', name: 'Development Server', status: 'offline', started: new Date(15, 1, 2017) },
    { instanceType: 'small', name: 'Testing Environment Server', status: 'stable', started: new Date(15, 1, 2017) }
  ];
  filteredStatus: string = "";
  appStatus: Promise<string>;

  ngOnInit(): void { this.appStatus = new Promise<string>((resolve, reject) => setTimeout(() => resolve("stable"), 2000)); }

  getStatusClasses(server: Server): {[s: string]: boolean} {
    return {
      "list-group-item-success": server.status === "stable",
      "list-group-item-warning": server.status === "offline",
      "list-group-item-danger": server.status === "critical",
    }
  }

  onAddServer(): void { this.servers.push({ instanceType: "small", name: "New Server", status: "critical", started: new Date(15, 1, 2017) }); }
}
