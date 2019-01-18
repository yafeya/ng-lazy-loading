import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  Customers: Customer[] = [];

  constructor(private mCustomerService: CustomerService) { }

  ngOnInit() {
    this.Customers = this.mCustomerService.getCustomers();
  }

}
