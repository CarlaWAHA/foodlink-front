import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'orders/:id', component: OrderSummaryComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];