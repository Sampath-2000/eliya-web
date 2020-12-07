import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryApiUri: string = environment.baseUrl + '/categories';
  httpOptions: any;
  constructor(private http: HttpClient,private authservice: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authservice.getToken(),
      }),
    };
      
   }
   getCategory() {
    return this.http.get(
      this.categoryApiUri + '?isActive=true',
      this.httpOptions
    );
 
  }
  addCategory(category: { name: any; icon: any; }) {
    return this.http.post(this.categoryApiUri, category, this.httpOptions);
   }
   updateCategory(category: any) {
    return this.http.put(
      this.categoryApiUri + '/' + category._id,
      category,
      this.httpOptions
    );
  }
}
