import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit {
  order?: Order;
  errorMessage = '';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.orderService.getOrderById(id).subscribe({
      next: (data) => {
        this.order = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de récupérer la commande.';
        this.loading = false;
      }
    });
  }

  getTotal(): number {
    if (!this.order) return 0;
    return this.order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'PENDING':
        return 'En attente';
      case 'PREPARING':
        return 'En préparation';
      case 'READY':
        return 'Prête';
      case 'SERVED':
        return 'Servie';
      default:
        return status;
    }
  }
}