import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './services';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule],
  declarations: [CustomerListComponent]
})
export class CustomersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomersModule,
      providers: [CustomerService]
    };
  }
}
