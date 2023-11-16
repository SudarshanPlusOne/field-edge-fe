// my-form-definition.ts
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export const MY_FORM_FIELDS: FormlyFieldConfig[] = [
  {
    key: 'id',
    type: 'input',
    templateOptions: {
      label: 'Customer Id',
      required: true,
      disabled: true
    },
  },
  {
    key: 'firstname',
    type: 'input',
    templateOptions: {
      label: 'First Name',
      required: true,
    },
  },
  {
    key: 'lastname',
    type: 'input',
    templateOptions: {
      label: 'Last Name',
      required: false,
    },
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email Address',
      required: true,
    },
    validators:{
        validation:['Email']
    }
   
  },
  {
    key: 'gender',
    type: 'input',
    templateOptions: {
      label: 'Last Name',
      required: false
    },
  },
  {
    key: 'currency',
    type: 'input',
    templateOptions: {
      label: 'Currency',
      required: false,
    },
  },
  {
    key: 'balance',
    type: 'input',
    templateOptions: {
      label: 'Balance',
      required: true,
    },
  },
  {
    key: 'country_code',
    type: 'input',
    templateOptions: {
      label: 'Country Code',
      required: true,
    },
  },
  {
    key: 'phone_Number',
    type: 'input',
    templateOptions: {
      label: 'Phone Number',
      required: true,
    },
  },
  
];


export function EmailValidator(control: AbstractControl): ValidationErrors | null{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(control.value) ? null : { 'email': true };
}


