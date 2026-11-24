import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankInternalSchema, bankSchema, type Bank } from "./bank.js";
import { bankingChannelsStatusSchema, type BankingChannelsStatus } from "./banking-channels-status.js";
import {
  chartOfAccountInternalSchema,
  chartOfAccountSchema,
  type ChartOfAccount,
} from "./chart-of-account.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";

export type BankAccount = {
  id?: number;
  companyId: number;
  accountNumber?: string | null;
  bankId?: number;
  branch?: string | null;
  accountName?: string | null;
  accountType?: number;
  lastReconciledDate?: Date | null;
  lastOutstandingBalanceDate?: Date | null;
  lastStatementDate?: Date | null;
  lastStatementDocumentId?: string | null;
  synced?: boolean;
  outstandingBalance?: number;
  createdOn?: Date;
  modifiedOn?: Date;
  isDefault?: boolean;
  /** @default false */
  isDelete?: boolean;
  lastAvailableBalance?: number;
  lastOutstandingBalance?: number;
  chartOfAccountId?: number | null;
  chartOfAccount?: ChartOfAccount;
  bank?: Bank;
  company?: Company;
  /** 1 = Active 3 = InActive */
  status?: BankingChannelsStatus;
  bankName?: string | null;
  qrCode?: string | null;
};

const bankAccountProperties: s.Shape<BankAccount> = {
  id: s.optional(s.int()),
  companyId: s.int(),
  accountNumber: s.optionalNullable(s.string()),
  bankId: s.optional(s.int()),
  branch: s.optionalNullable(s.string()),
  accountName: s.optionalNullable(s.string()),
  accountType: s.optional(s.int()),
  lastReconciledDate: s.optionalNullable(s.dateTime()),
  lastOutstandingBalanceDate: s.optionalNullable(s.dateTime()),
  lastStatementDate: s.optionalNullable(s.dateTime()),
  lastStatementDocumentId: s.optionalNullable(s.string()),
  synced: s.optional(s.boolean()),
  outstandingBalance: s.optional(s.float64()),
  createdOn: s.optional(s.dateTime()),
  modifiedOn: s.optional(s.dateTime()),
  isDefault: s.optional(s.boolean()),
  isDelete: s.defaulted(s.boolean(), false),
  lastAvailableBalance: s.optional(s.float64()),
  lastOutstandingBalance: s.optional(s.float64()),
  chartOfAccountId: s.optionalNullable(s.int()),
  chartOfAccount: s.optional(s.lazy(() => chartOfAccountInternalSchema)),
  bank: s.optional(s.lazy(() => bankInternalSchema)),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  status: s.optional(s.lazy(() => bankingChannelsStatusSchema)),
  bankName: s.optionalNullable(s.string()),
  qrCode: s.optionalNullable(s.string()),
};

export const bankAccountInternalSchema: Schema<BankAccount> = s.object<BankAccount>(bankAccountProperties);

export const bankAccountSchema: Schema<BankAccount> = s.lazySchema(() =>
  s.object<BankAccount>({
    ...bankAccountProperties,
    accountNumber: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
    chartOfAccount: s.optional(s.lazy(() => chartOfAccountSchema)),
    bank: s.optional(s.lazy(() => bankSchema)),
    company: s.optional(s.lazy(() => companySchema)),
  }),
);
