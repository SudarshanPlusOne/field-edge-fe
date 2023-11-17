import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Customer } from './home/home.component';


const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) {
   }


   listCustomer(){
    return this.http.get<Customer[]>(baseUrl+'/customers');

   }
   addCustomer(customer: Customer){
    return this.http.post<string>(baseUrl+'/customer',customer);
   }
   editCustomer(customer:Customer){
    return this.http.put<string>(baseUrl+"/customer/"+customer.id,customer);
   }
   deleteCustomer(id:string){
    return this.http.delete<string>(baseUrl+'/customer/'+id);
   }
}
