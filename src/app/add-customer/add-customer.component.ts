import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CustomerService } from '../customer.service';
import { MY_FORM_FIELDS } from '../edit-customer/my-form-definition';
import { Customer } from '../home/home.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customer: Customer={
    id: '',
    firstname: '',
    gender: '',
    lastname: '',
    currency: '',
    email: '',
    balance: '',
    country_code: '',
    phone_Number: ''
  };
 
// onSubmit(arg0: any) {
// throw new Error('Method not implemented.');
// }
  

  constructor(private activatedRoute: ActivatedRoute,private service:CustomerService,private router:Router){
   
  }
  formFields: FormlyFieldConfig[] = MY_FORM_FIELDS;
  formModel: any = {}; // Ensure formModel is an object
  formOptions = {};
  form = new FormGroup({});



  updateFormFields(data: any): FormlyFieldConfig[] {
    // Add logic to update form fields based on loaded data
    // For example, conditionally show/hide fields, change field properties, etc.
    return MY_FORM_FIELDS;
  }

  updateFormModel(data: any): void {
    // Update formModel with the loaded data
    this.formModel = data;
  }
  submit(model:any) {
    alert(model);
  }

  onSubmit() {
    console.log(this.form.valid);
    if (this.form.valid) {
      // console.log('Form submitted with:', this.formModel);

      this.service.addCustomer(this.formModel).subscribe((x:any)=>{
        console.log(x);

        // if(x.isSuccessStatusCode==true && x.statusCode>=202){
          
        // this.router.navigateByUrl('');
        //     }
      })

      // You can perform further actions here
    } else {
      console.error('Form is invalid');
    }
  }
}
