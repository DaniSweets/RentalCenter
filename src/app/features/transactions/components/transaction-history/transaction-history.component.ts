import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Transaction } from '../../../../models/transaction.model';
import { TransactionTypes } from '../../../../models/transaction-types.enum';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionHistoryComponent {
  // TODO: use service to fetch data
  dataSource: Transaction[] = [
    { date: new Date('2024-02-01'), transactionType: TransactionTypes.RentCharge, note: 'MONTHLY RENT', amount: 875, balance: 875 },
    { date: new Date('2024-02-01'), transactionType: TransactionTypes.RentCharge, note: 'Dep@CACU', amount: -875, balance: 0 },
    { date: new Date('2024-02-01'), transactionType: TransactionTypes.RentCharge, note: 'MONTHLY RENT', amount: 875, balance: 875 },
    { date: new Date('2024-02-01'), transactionType: TransactionTypes.RentCharge, note: 'MONTHLY RENT', amount: -875, balance: 0 }
  ];

  displayColumns: string[] = ['date', 'transactionType', 'note', 'amount', 'balance'];
}
