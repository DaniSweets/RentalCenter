import { TransactionTypes } from "./transaction-types.enum";

export interface Transaction {
    date: Date;
    transactionType: TransactionTypes;
    note: string;
    amount: number;
    balance: number;
}