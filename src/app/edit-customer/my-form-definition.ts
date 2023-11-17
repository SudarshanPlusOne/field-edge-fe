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
    type: 'select',
    templateOptions: {
      label: 'Gender',
      required: true,
      options: [
        { label: 'Male', value: 'm' },
        { label: 'Female', value: 'f' },
        { label: 'Others', value: 'o' },
      ],
    },
  },
  {
    key: 'currency',
    type: 'select',
    templateOptions: {
      label: 'Currency',
      required: false,
      options: [
        { label: 'US', value: 'USA' },
        { label: 'INR', value: 'INR' },
      ],
    },
  },
  {
    key: 'balance',
    type: 'input',
    templateOptions: {
      label: 'Balance',
      required: true,
      type:'number'
    },
  },
  {
    key: 'country_code',
    type: 'input',
    templateOptions: {
      label: 'Country Code',
      required: true,
      pattern: '^[0-9]*[!@#$%^&*()_+,\-./:;<=>?@[\\\]_`{|}~][0-9]*$',
      maxLength: 4
    },
  },
  {
    key: 'phone_Number',
    type: 'input',
    templateOptions: {
      label: 'Phone Number',
      required: true,
      pattern:'/^(\+\d{1,3}[- ]?)?\d{10}$/',
      min:1111111111,
      max:9999999999,
      minLength: 10,
      maxLength:10
    },
  },
  
];


export function EmailValidator(control: AbstractControl): ValidationErrors | null{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(control.value) ? null : { 'email': true };
}


