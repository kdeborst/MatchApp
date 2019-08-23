import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out successfully');
  }
}
