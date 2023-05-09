import { AccountID } from "../accounts-api/dtos";
import { ExpenseCategoryID } from "../expense-categories-api/dtos";

import {
  CreateExpenseDTO,
  ExpenseDTO,
  ExpenseID,
  ExpensesDTO,
  UpdateExpenseDTO,
} from "./dtos";

export interface ExpensesAPI {
  getExpenses(): Promise<ExpensesDTO>;
  createExpense(expense: CreateExpenseDTO): Promise<ExpenseDTO>;
  updateExpense(id: ExpenseID, expense: UpdateExpenseDTO): Promise<void>;
  deleteExpense(id: ExpenseID): Promise<void>;
  deleteExpensesByAccounts(accountIds: AccountID[]): Promise<void>;
  deleteExpensesByCategories(categoryIds: ExpenseCategoryID[]): Promise<void>;
}