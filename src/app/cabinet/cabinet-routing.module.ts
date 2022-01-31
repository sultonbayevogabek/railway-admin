import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ApelsinOrdersComponent } from './apelsin-orders/apelsin-orders.component'
import { CabinetComponent } from './cabinet.component'
import { CreateStationComponent } from './create-station/create-station.component'
import { DisputeComponent } from './dispute/dispute.component'
import { InvoiceComponent } from './invoice/invoice.component'
import { LegalOrdersComponent } from './legal-orders/legal-orders.component'
import { LegalUsersComponent } from './legal-users/legal-users.component'
import { NoticeComponent } from './notice/notice.component'
import { OrdersComponent } from './orders/orders.component'
import { PaymentFailedOrdersComponent } from './payment-failed-orders/payment-failed-orders.component'
import { PaymentIntentionsComponent } from './payment-intentions/payment-intentions.component'
import { PayoutComponent } from './payout/payout.component'
import { ReturnsComponent } from './returns/returns.component'
import { SmsComponent } from './sms/sms.component'
import { StationsComponent } from './stations/stations.component'
import { TicketsComponent } from './tickets/tickets.component'
import { UsersComponent } from './users/users.component'
import { TrainsComponent } from './trains/trains.component'
import { CommissionFeesComponent } from './commission-fees/commission-fees.component'
import { CreateCommissionComponent } from './create-commission/create-commission.component'
import { WagonsDescriptionComponent } from './wagons-description/wagons-description.component'
import { WagonsPictureComponent } from './wagons-picture/wagons-picture.component'
import { WagonsReviewComponent } from './wagons-review/wagons-review.component'
import { InsurancePoliciesComponent } from './insurance-policies/insurance-policies.component'
import { AddIncomeProductComponent } from './add-income-product/add-income-product.component'
import { InventoryComponent } from './inventory/inventory.component'

const routes: Routes = [
  {
    path: 'cabinet',
    component: CabinetComponent,
    children: [
      {
        path: '',
        redirectTo: 'trains'
      },
      {
        path: 'trains',
        component: TrainsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'legal-users',
        component: LegalUsersComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'legal-orders',
        component: LegalOrdersComponent
      },
      {
        path: 'tickets',
        component: TicketsComponent
      },
      {
        path: 'payment-failed-orders',
        component: PaymentFailedOrdersComponent
      },
      {
        path: 'apelsin-orders',
        component: ApelsinOrdersComponent
      },
      {
        path: 'sms',
        component: SmsComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'notice',
        component: NoticeComponent
      },
      {
        path: 'payment-intentions',
        component: PaymentIntentionsComponent
      },
      {
        path: 'returns',
        component: ReturnsComponent
      },
      {
        path: 'dispute',
        component: DisputeComponent
      },
      {
        path: 'payout',
        component: PayoutComponent
      },
      {
        path: 'stations',
        component: StationsComponent
      },
      {
        path: 'create-station',
        component: CreateStationComponent
      },
      {
        path: 'commission-fees',
        component: CommissionFeesComponent
      },
      {
        path: 'create-commission',
        component: CreateCommissionComponent
      },
      {
        path: 'wagons-description',
        component: WagonsDescriptionComponent
      },
      {
        path: 'wagons-picture',
        component: WagonsPictureComponent
      },
      {
        path: 'wagons-review',
        component: WagonsReviewComponent
      },
      {
        path: 'insurance-policies',
        component: InsurancePoliciesComponent
      },
      {
        path: 'add-income-product',
        component: AddIncomeProductComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CabinetRoutingModule {}
