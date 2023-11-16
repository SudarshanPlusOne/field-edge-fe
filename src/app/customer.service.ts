import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Customer } from './home/home.component';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) {
   }


   listCustomer(){
    let baseUrl = environment.baseUrl;
    return this.http.get<Customer[]>(baseUrl+'/customers');

   }
}
