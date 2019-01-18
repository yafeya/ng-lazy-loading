import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
    private mUsers: Customer[] = [];

    constructor() {
        this.initialize();
    }

    getCustomers(): Customer[] {
        return this.mUsers;
    }
    getCustomer(name: string): Customer {
        let target: Customer = undefined;
        for (let user of this.mUsers) {
            if (user.Name == name) {
                target = user;
            }
        }
        return target;
    }
    private initialize() {
        for (let i = 1; i <= 5; i++) {
            let user = new Customer();
            user.Name = `User${i.toString()}`;
            user.Age = 20 + i;
            user.Email = `${user.Name}@163.com`;
            this.mUsers.push(user);
        }
    }
}