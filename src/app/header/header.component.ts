import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: AuthenticationService, private router: Router) { }
  ownerItems = [{ value: 'Guest List', route: '/guests' }, { value: 'Add Employee', route: '/create-employee' },
  { value: 'Employee List', route: '/employees' }, { value: 'Add Rooms', route: '/create-room' }, { value: 'Room List', route: '/rooms' },
  { value: 'Booked Rooms', route: '/reservations' }]

  managerItems = [{ value: 'Add Employee', route: '/create-employee' },
  { value: 'Employee List', route: '/employees' }, { value: 'Add Rooms', route: '/create-room' }, { value: 'Room List', route: '/rooms' },
  { value: 'Guest List', route: '/guests' }, { value: 'Booked Rooms', route: '/reservations' }]

  receptionistItems = [{ value: 'Add Guest', route: '/create-guest' }, { value: 'Guest List', route: '/guests' },
  { value: 'Room List', route: '/rooms' }, { value: 'Booked Rooms', route: '/reservations' }]
  routesToShow = [];
  ngOnInit() {
    if (sessionStorage.getItem('username') === "Receptionist") {
      this.routesToShow = this.receptionistItems;
      this.router.navigate(['/guests']);
    }

    if (sessionStorage.getItem('username') === "Manager") {
      this.routesToShow = this.managerItems;
      this.router.navigate(['/employees']);
    }
    if (sessionStorage.getItem('username') === "Owner") {
      this.routesToShow = this.ownerItems;
      this.router.navigate(['/employees']);
    }
  }
}

