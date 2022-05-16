import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IEmployee} from '../../model/IEmployee';
import {ICustomer} from '../../model/ICustomer';
import {IFacility} from '../../model/IFacility';
import {gte} from '../../model/gte';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractCreateForm: FormGroup;
  employees: IEmployee[] = [];
  customers: ICustomer[] = [];
  facilities: IFacility[] = [];

  constructor(){}

  ngOnInit(): void {
    this.contractCreateForm = new FormGroup({
      contractStartDate: new FormControl('', [Validators.required]),
      contractEndDate: new FormControl('', [Validators.required]),
      contractDeposit: new FormControl('', [Validators.required, gte]),
      contractTotalMoney: new FormControl('', [Validators.required, gte]),
      employee: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
      services: new FormControl('', [Validators.required]),
    });
  }

  get contractStartDate() {
    return this.contractCreateForm.get('contractStartDate');
  }

  get contractEndDate() {
    return this.contractCreateForm.get('contractEndDate');
  }

  get contractDeposit() {
    return this.contractCreateForm.get('contractDeposit');
  }

  get contractTotalMoney() {
    return this.contractCreateForm.get('contractTotalMoney');
  }

  get employee() {
    return this.contractCreateForm.get('employee');
  }

  get customer() {
    return this.contractCreateForm.get('customer');
  }

  get services() {
    return this.contractCreateForm.get('services');
  }
  onSubmit() {
    if (this.contractCreateForm.invalid) {
      if (this.contractStartDate.value == '') {
        this.contractStartDate.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.contractEndDate.value == '') {
        this.contractEndDate.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.contractDeposit.value == '') {
        this.contractDeposit.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.contractTotalMoney.value == '') {
        this.contractTotalMoney.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.employee.value == '') {
        this.employee.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.customer.value == '') {
        this.customer.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.services.value == '') {
        this.services.setErrors({empty: 'Empty! Please choose!'});
      }

      if (this.contractStartDate.value != '' && this.contractEndDate.value != ''){
        const contractStartDateParse = new Date(this.contractStartDate.value);
        const contractEndDateParse = new Date(this.contractEndDate.value);
        if (contractStartDateParse > contractEndDateParse){
          this.contractStartDate.setErrors({dateErrors: 'Start date must be before end date! Please choose again!'});
          this.contractEndDate.setErrors({dateErrors: 'End date must be after start date! Please choose again!'});
        }
      }
    }
  }
}
