import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookOfAccountStatusSchema, type BookOfAccountStatus } from "./book-of-account-status.js";
import {
  financialTransactionTypeSchema,
  type FinancialTransactionType,
} from "./financial-transaction-type.js";
import { iChartOfAccountSchema, type IChartOfAccount } from "./ichart-of-account.js";
import { iJournalEntryBaseSchema, type IJournalEntryBase } from "./ijournal-entry-base.js";

export type IBookOfAccount = {
  journalEntryId?: number;
  companyId?: number;
  /** 1 = Debit 3 = Credit */
  debitCredit?: FinancialTransactionType;
  /**
   * 0 = Delete 1 = Awaiting 5 = Approved 9 = Void -9 = ResetVoid -5 = ResetApproved -1 =
   * ResetAwaiting
   */
  bookOfAccountStatus?: BookOfAccountStatus;
  chartOfAccountId?: number;
  postedDate?: Date | null;
  createdOn?: Date;
  modifiedOn?: Date;
  approvedOn?: Date | null;
  value?: number;
  balance?: number;
  excludeVoidBalance?: number;
  rowNumber?: number;
  description?: string | null;
  descriptionForeign?: string | null;
  chartOfAccountName?: string | null;
  journalEntry?: IJournalEntryBase;
  chartOfAccount?: IChartOfAccount;
};

export const iBookOfAccountSchema: Schema<IBookOfAccount> = s.object<IBookOfAccount>({
  journalEntryId: s.optional(s.int()),
  companyId: s.optional(s.int()),
  debitCredit: s.optional(s.lazy(() => financialTransactionTypeSchema)),
  bookOfAccountStatus: s.optional(s.lazy(() => bookOfAccountStatusSchema)),
  chartOfAccountId: s.optional(s.int()),
  postedDate: s.optionalNullable(s.dateTime()),
  createdOn: s.optional(s.dateTime()),
  modifiedOn: s.optional(s.dateTime()),
  approvedOn: s.optionalNullable(s.dateTime()),
  value: s.optional(s.float64()),
  balance: s.optional(s.float64()),
  excludeVoidBalance: s.optional(s.float64()),
  rowNumber: s.optional(s.int()),
  description: s.optionalNullable(s.string()),
  descriptionForeign: s.optionalNullable(s.string()),
  chartOfAccountName: s.optionalNullable(s.string()),
  journalEntry: s.optional(s.lazy(() => iJournalEntryBaseSchema)),
  chartOfAccount: s.optional(s.lazy(() => iChartOfAccountSchema)),
});
