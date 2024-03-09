import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../apiservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{


  employees: any[];

  constructor(private apiService: ApiService,private router: Router) {
    this.employees= [];
  }

  ngOnInit() {
    this.apiService.getEmployeeInfo().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
 

  logout() {
    this.router.navigate(['/Login']);
  }
}
