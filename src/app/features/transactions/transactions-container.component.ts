import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, AddTransactionComponent, TransactionHistoryComponent],
  templateUrl: './transactions-container.component.html',
  styleUrl: './transactions-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent {}
