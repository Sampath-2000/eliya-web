import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: any;
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
   
  ) {}

  ngOnInit() {
    this.name = this.cookieService.get('name');
  }
  openAddExpense() {
    const dialogRef = this.dialog.open(AddExpenseComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((add: any) => {
      if (add) {
        //this.category = category;
      }
    });
  }
  logoutUser() {
    this.authService.removeToken();
    this.router.navigateByUrl('/login/auth');
  }
}
