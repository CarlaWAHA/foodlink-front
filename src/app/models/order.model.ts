export type OrderStatus = 'PENDING' | 'PREPARING' | 'READY' | 'SERVED';

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: number;
  status: OrderStatus;
  items: OrderItem[];
}