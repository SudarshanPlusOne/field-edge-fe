import {Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource, MatTableDataSourcePaginator, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CustomerService } from '../customer.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

export interface Customer {
  id: string;
  firstname: string;
  gender: string;
  lastname: string;
  currency: string;
  email: string;
  balance: string;
  country_code: string;
  phone_Number: string;
}

 
// const ELEMENT_DATA: Customer[] = [
//   ];

/**
 * @title Adding and removing data when using an array-based datasource.
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // standalone: true,
  // imports: [MatButtonModule, MatTableModule],
})
export class HomeComponent {
  displayedColumns: string[] = ['id' ,
    'firstname' ,
    'gender' ,
    'lastname' ,
    'currency' ,
    'email' ,
    'balance' ,
    'country_code' ,
    'phone_Number',
  'actions' ];
  // displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  dataSource: any;
    ds1: any;
  // dataSource = new MatTableDataSource<Customer>(this.dataSource);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  

  @ViewChild(MatTable) table: MatTable<Customer> | any;


constructor(private service: CustomerService,private router:Router){

}
ngOnInit(){
  this.service.listCustomer().subscribe(x=>{
    console.log(x)
    this.dataSource = x;
    this.dataSource = new MatTableDataSource<Customer>(x);
    this.dataSource.paginator = this.paginator;

  })
  
}
ngAfterViewInit() {
}

addCustomer(){
  this.router.navigateByUrl('/add?new');
}

  // addData() {
  //   this.table.renderRows();
  // }
  editData(element: Customer){
    
console.log(element.balance);

this.router.navigate(['/edit'],{queryParams:{ customer: JSON.stringify(element) } ,queryParamsHandling:'merge'});
  }

  onButtonClick(row: Customer) {
    // Handle button click for the specific row
    var result = confirm("Want to delete?");

if (result) {
  this.service.deleteCustomer(row.id).subscribe((x:any)=>{
    
    if(x.isSuccessStatusCode==true && x.statusCode>=204){
      
  window.location.href='';
    }
    else{


      alert("Something went wrong");
    }
  });   
}
    // console.log('Button clicked for row:', row);
    // Add your custom logic here
  }
  // removeData() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }
}


