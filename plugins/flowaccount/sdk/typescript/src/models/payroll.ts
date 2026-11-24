import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import { galleryInternalSchema, gallerySchema, type Gallery } from "./gallery.js";
import { PaidPeriod, paidPeriodSchema } from "./paid-period.js";
import { payrollDetailInternalSchema, payrollDetailSchema, type PayrollDetail } from "./payroll-detail.js";
import { payrollStatusSchema, type PayrollStatus } from "./payroll-status.js";
import { ruleCompileStatusSchema, type RuleCompileStatus } from "./rule-compile-status.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type Payroll = {
  id?: number;
  companyId?: number;
  startDate?: Date;
  endDate?: Date;
  paymentCycle?: number;
  /**
   * 0 = Draft 1 = Awaiting 2 = Reset 3 = Paid 4 = Partial 5 = Rejected 7 = Approved 11 =
   * PushPayAwaiting 13 = PushPayProcessed 15 = PushPayRejected 17 = PushPayPartial 19 =
   * PushPayPendingPayments 50 = KConnectAwaiting 52 = KConnectProcessed 54 = KConnectRejected 56 =
   * KConnectPendingPayments
   */
  status?: PayrollStatus;
  isDelete?: boolean;
  createdOn?: Date | null;
  modifiedOn?: Date | null;
  createdBy?: number | null;
  modifiedBy?: number | null;
  expenseId?: number | null;
  galleryId?: number | null;
  remarks?: string | null;
  total?: number;
  bankId?: number | null;
  accountNumber?: string | null;
  addAmount?: number;
  deductAmount?: number;
  netTotal?: number;
  runningNumberType?: number;
  datePayment?: Date | null;
  documentDate?: Date;
  totalPayrollCash?: number;
  totalPayrollTransfer?: number;
  fee?: number;
  paymentRemarks?: string | null;
  employerAccountNumber?: string | null;
  employerAccountBranch?: string | null;
  bankAccountId?: number | null;
  accountType?: BankAccountType;
  referenceId?: string | null;
  payrollVersion?: number;
  company?: Company;
  createdByUser?: User;
  modifiedByUser?: User;
  payrollDetail?: PayrollDetail[] | null;
  gallery?: Gallery;
  isMigrate?: boolean;
  /** 1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore */
  ruleCompileStatus?: RuleCompileStatus;
  isPartialPayments?: boolean;
  /** @default PaidPeriod._1 */
  paidPeriod?: PaidPeriod;
  /** @default 5 */
  socialSecurityPercent?: number;
  statusInt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payrollProperties: s.Shape<Payroll> = {
  id: s.optional(s.int()),
  companyId: s.optional(s.int()),
  startDate: s.optional(s.dateTime()),
  endDate: s.optional(s.dateTime()),
  paymentCycle: s.optional(s.int()),
  status: s.optional(s.lazy(() => payrollStatusSchema)),
  isDelete: s.optional(s.boolean()),
  createdOn: s.optionalNullable(s.dateTime()),
  modifiedOn: s.optionalNullable(s.dateTime()),
  createdBy: s.optionalNullable(s.int()),
  modifiedBy: s.optionalNullable(s.int()),
  expenseId: s.optionalNullable(s.int()),
  galleryId: s.optionalNullable(s.int()),
  remarks: s.optionalNullable(s.string()),
  total: s.optional(s.float64()),
  bankId: s.optionalNullable(s.int()),
  accountNumber: s.optionalNullable(s.string()),
  addAmount: s.optional(s.float64()),
  deductAmount: s.optional(s.float64()),
  netTotal: s.optional(s.float64()),
  runningNumberType: s.optional(s.int()),
  datePayment: s.optionalNullable(s.dateTime()),
  documentDate: s.optional(s.dateTime()),
  totalPayrollCash: s.optional(s.float64()),
  totalPayrollTransfer: s.optional(s.float64()),
  fee: s.optional(s.float64()),
  paymentRemarks: s.optionalNullable(s.string()),
  employerAccountNumber: s.optionalNullable(s.string()),
  employerAccountBranch: s.optionalNullable(s.string()),
  bankAccountId: s.optionalNullable(s.int()),
  accountType: s.optional(s.lazy(() => bankAccountTypeSchema)),
  referenceId: s.optionalNullable(s.string()),
  payrollVersion: s.optional(s.int()),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  createdByUser: s.optional(s.lazy(() => userInternalSchema)),
  modifiedByUser: s.optional(s.lazy(() => userInternalSchema)),
  payrollDetail: s.optionalNullable(s.array(s.lazy(() => payrollDetailInternalSchema))),
  gallery: s.optional(s.lazy(() => galleryInternalSchema)),
  isMigrate: s.optional(s.boolean()),
  ruleCompileStatus: s.optional(s.lazy(() => ruleCompileStatusSchema)),
  isPartialPayments: s.optional(s.boolean()),
  paidPeriod: s.defaulted(paidPeriodSchema, PaidPeriod._1),
  socialSecurityPercent: s.defaulted(s.float64(), 5),
  statusInt: s.optional(s.int()),
};

export const payrollInternalSchema: Schema<Payroll> = s.object<Payroll>(payrollProperties, {
  additionalProperties: s.json(),
});

export const payrollSchema: Schema<Payroll> = s.lazySchema(() =>
  s.object<Payroll>(
    {
      ...payrollProperties,
      company: s.optional(s.lazy(() => companySchema)),
      createdByUser: s.optional(s.lazy(() => userSchema)),
      modifiedByUser: s.optional(s.lazy(() => userSchema)),
      payrollDetail: s.optionalNullable(s.array(s.lazy(() => payrollDetailSchema))),
      gallery: s.optional(s.lazy(() => gallerySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
