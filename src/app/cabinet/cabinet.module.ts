import { NgModule } from '@angular/core'
import { CabinetRoutingModule } from './cabinet-routing.module'
import { CabinetComponent } from './cabinet.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { HeaderComponent } from './header/header.component'
import { CommonModule } from '@angular/common'
import { TrainsComponent } from './trains/trains.component'
import { UsersComponent } from './users/users.component'
import { LegalUsersComponent } from './legal-users/legal-users.component'
import { OrdersComponent } from './orders/orders.component'
import { LegalOrdersComponent } from './legal-orders/legal-orders.component'
import { TicketsComponent } from './tickets/tickets.component'
import { PaymentFailedOrdersComponent } from './payment-failed-orders/payment-failed-orders.component'
import { ApelsinOrdersComponent } from './apelsin-orders/apelsin-orders.component'
import { SmsComponent } from './sms/sms.component'
import { InvoiceComponent } from './invoice/invoice.component'
import { NoticeComponent } from './notice/notice.component'
import { PaymentIntentionsComponent } from './payment-intentions/payment-intentions.component'
import { ReturnsComponent } from './returns/returns.component'
import { DisputeComponent } from './dispute/dispute.component'
import { PayoutComponent } from './payout/payout.component'
import { StationsComponent } from './stations/stations.component'
import { CreateStationComponent } from './create-station/create-station.component';
import { CommissionFeesComponent } from './commission-fees/commission-fees.component';
import { CreateCommissionComponent } from './create-commission/create-commission.component';
import { WagonsDescriptionComponent } from './wagons-description/wagons-description.component';
import { WagonsPictureComponent } from './wagons-picture/wagons-picture.component';
import { WagonsReviewComponent } from './wagons-review/wagons-review.component';
import { InsurancePoliciesComponent } from './insurance-policies/insurance-policies.component';
import { AddIncomeProductComponent } from './add-income-product/add-income-product.component';
import { FooterComponent } from './footer/footer.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    CabinetComponent,
    SidebarComponent,
    HeaderComponent,
    TrainsComponent,
    UsersComponent,
    LegalUsersComponent,
    OrdersComponent,
    LegalOrdersComponent,
    TicketsComponent,
    PaymentFailedOrdersComponent,
    ApelsinOrdersComponent,
    SmsComponent,
    InvoiceComponent,
    NoticeComponent,
    PaymentIntentionsComponent,
    ReturnsComponent,
    DisputeComponent,
    PayoutComponent,
    StationsComponent,
    CreateStationComponent,
    CommissionFeesComponent,
    CreateCommissionComponent,
    WagonsDescriptionComponent,
    WagonsPictureComponent,
    WagonsReviewComponent,
    InsurancePoliciesComponent,
    AddIncomeProductComponent,
    FooterComponent,
    InventoryComponent
  ],
  imports: [
    CabinetRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})

export class CabinetModule {
}
