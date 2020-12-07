import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { AddCategoryComponent } from '../components/add-category/add-category.component';




@Injectable({
  providedIn: 'root',
})
export class CommonService {
  
title=new BehaviorSubject('Add Category');
name=new BehaviorSubject('');
icon=new BehaviorSubject('');
id=new BehaviorSubject('');


  invokeConfirmComponent = new EventEmitter();    
  subsVar: Subscription | undefined;  
  walletApiUri: string = environment.baseUrl + '/wallets?isActive=true';
  categoryApiUri: string = environment.baseUrl + '/categories?isActive=true';
  budgetApiUri: string = environment.baseUrl + '/budgets?isActive=true';
  httpOptions: any;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private cookieService: CookieService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    };
  }

  getWallets() {
    return this.http.get(
      this.walletApiUri + '&userId=' + this.cookieService.get('userId'),
      this.httpOptions
    );
  }
  getUpdateCategory(name:string,icon:string,id:string,){
  
  if(name){
    var setValues = (title:string,name:string,icon:string,id:number) =>{
        this.title.next(title);
        this.name.next(name);
        this.icon.next(icon);


    }
  }

  }
  getCategory() {
    
    return this.http.get(
      this.categoryApiUri + '&userId=' + this.cookieService.get('userId'),
      this.httpOptions
    );
  }
  getBudgets() {
    return this.http.get(
      this.budgetApiUri + '&userId=' + this.cookieService.get('userId'),
      this.httpOptions
    );
  }
}
