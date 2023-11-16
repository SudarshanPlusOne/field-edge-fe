import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../home/home.component';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { MY_FORM_FIELDS } from './my-form-definition';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
  
})


export class EditCustomerComponent {
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
  

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe((params: any) => { 
      this.customer = JSON.parse(JSON.stringify(params.customer));
      console.log(this.customer);
      this.formFields = this.updateFormFields(JSON.parse(params.customer));
      this.updateFormModel(JSON.parse(params.customer)); // Update formModel directly

      
    });
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
    if (this.formModel) {
      console.log('Form submitted with:', this.formModel);
      // You can perform further actions here
    } else {
      console.error('Form is invalid');
    }
  }
}
