import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { bankInternalSchema, bankSchema, type Bank } from "./bank.js";
import {
  conditionsOfWithholdingTaxSchema,
  type ConditionsOfWithholdingTax,
} from "./conditions-of-withholding-tax.js";
import { employeeInternalSchema, employeeSchema, type Employee } from "./employee.js";
import { expenseListInternalSchema, expenseListSchema, type ExpenseList } from "./expense-list.js";
import { payrollDetailStatusSchema, type PayrollDetailStatus } from "./payroll-detail-status.js";
import { payrollInternalSchema, payrollSchema, type Payroll } from "./payroll.js";
import { ruleCompileStatusSchema, type RuleCompileStatus } from "./rule-compile-status.js";
import { sendEmailStatusSchema, type SendEmailStatus } from "./send-email-status.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type PayrollDetail = {
  id?: number;
  payrollId?: number;
  employeeId?: number;
  salary?: number;
  socialSecurityValue?: number;
  commission?: number;
  bonus?: number;
  deduction?: number;
  withholdingTax?: number;
  /**
   * 0 = Draft 1 = Awaiting 2 = Reset 3 = Paid 4 = Partial 5 = Rejected 7 = Approved 11 =
   * PushPayAwaiting 13 = PushPayProcessed 15 = PushPayRejected 17 = PushPayPartial 19 =
   * PushPayPendingPayments 50 = KConnectAwaiting 52 = KConnectProcessed 54 = KConnectRejected 56 =
   * KConnectPendingPayments 58 = KConnectPartialPayments
   */
  status?: PayrollDetailStatus;
  isDelete?: boolean;
  withheld?: number;
  datePayment?: Date | null;
  fee?: number | null;
  ref?: string | null;
  transactionId?: string | null;
  amount?: number | null;
  payStatus?: number | null;
  remarks?: string | null;
  expenseId?: number | null;
  overtime?: number;
  advance?: number;
  otherAddition?: number;
  otherDeduction?: number;
  providentFund?: number;
  securityMoney?: number;
  value?: number;
  note?: string | null;
  createdOn?: Date | null;
  createdBy?: number | null;
  modifiedOn?: Date | null;
  lastModifiedBy?: number;
  employerSocialSecurity?: number;
  allowance?: number;
  cola?: number;
  medicalExpense?: number;
  accommodation?: number;
  directorRemuneration?: number;
  methodPayment?: number | null;
  bankId?: number | null;
  accountNumber?: string | null;
  accountNumberMasking?: string | null;
  employeeTitle?: string | null;
  employeeCode?: string | null;
  employeeFirstName?: string | null;
  employeeLastName?: string | null;
  employeeFirstNameForeign?: string | null;
  employeeLastNameForeign?: string | null;
  employeeStartDate?: Date | null;
  isSocialSecurityRegistered?: boolean;
  bankBranchCode?: string | null;
  accountType?: BankAccountType;
  referenceId?: string | null;
  isMigrate?: boolean;
  employee?: Employee;
  expenseList?: ExpenseList;
  payroll?: Payroll;
  bank?: Bank;
  lastModifiedByUser?: User;
  /** 1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore */
  ruleCompileStatus?: RuleCompileStatus;
  employerAccountBranch?: string | null;
  employerAccountNumber?: string | null;
  bankAccountId?: number | null;
  paymentRemarks?: string | null;
  payrollPaymentId?: number | null;
  kcProcessingStatus?: number | null;
  departmentId?: number | null;
  departmentName?: string | null;
  departmentCode?: string | null;
  workDays?: number | null;
  wage?: number | null;
  isSocialSecurityAutoCal?: boolean;
  /** @default 5 */
  socialSecurityPercent?: number;
  sendEmailStatus?: SendEmailStatus;
  studentLoan?: number;
  conditionsWithholdingTax?: ConditionsOfWithholdingTax;
  overtimePnd?: number | null;
  commissionPnd?: number | null;
  bonusPnd?: number | null;
  allowancePnd?: number | null;
  colaPnd?: number | null;
  medicalExpensePnd?: number | null;
  accommodationPnd?: number | null;
  directorRemunerationPnd?: number | null;
  otherAdditionPnd?: number | null;
  withholdingTax401?: number;
  withholdingTax402?: number;
  statusInt?: number;
};

const payrollDetailProperties: s.Shape<PayrollDetail> = {
  id: s.optional(s.int()),
  payrollId: s.optional(s.int()),
  employeeId: s.optional(s.int()),
  salary: s.optional(s.float64()),
  socialSecurityValue: s.optional(s.float64()),
  commission: s.optional(s.float64()),
  bonus: s.optional(s.float64()),
  deduction: s.optional(s.float64()),
  withholdingTax: s.optional(s.float64()),
  status: s.optional(s.lazy(() => payrollDetailStatusSchema)),
  isDelete: s.optional(s.boolean()),
  withheld: s.optional(s.float64()),
  datePayment: s.optionalNullable(s.dateTime()),
  fee: s.optionalNullable(s.float64()),
  ref: s.optionalNullable(s.string()),
  transactionId: s.optionalNullable(s.string()),
  amount: s.optionalNullable(s.float64()),
  payStatus: s.optionalNullable(s.int()),
  remarks: s.optionalNullable(s.string()),
  expenseId: s.optionalNullable(s.int()),
  overtime: s.optional(s.float64()),
  advance: s.optional(s.float64()),
  otherAddition: s.optional(s.float64()),
  otherDeduction: s.optional(s.float64()),
  providentFund: s.optional(s.float64()),
  securityMoney: s.optional(s.float64()),
  value: s.optional(s.float64()),
  note: s.optionalNullable(s.string()),
  createdOn: s.optionalNullable(s.dateTime()),
  createdBy: s.optionalNullable(s.int()),
  modifiedOn: s.optionalNullable(s.dateTime()),
  lastModifiedBy: s.optional(s.int()),
  employerSocialSecurity: s.optional(s.float64()),
  allowance: s.optional(s.float64()),
  cola: s.optional(s.float64()),
  medicalExpense: s.optional(s.float64()),
  accommodation: s.optional(s.float64()),
  directorRemuneration: s.optional(s.float64()),
  methodPayment: s.optionalNullable(s.int()),
  bankId: s.optionalNullable(s.int()),
  accountNumber: s.optionalNullable(s.string()),
  accountNumberMasking: s.optionalNullable(s.string()),
  employeeTitle: s.optionalNullable(s.string()),
  employeeCode: s.optionalNullable(s.string()),
  employeeFirstName: s.optionalNullable(s.string()),
  employeeLastName: s.optionalNullable(s.string()),
  employeeFirstNameForeign: s.optionalNullable(s.string()),
  employeeLastNameForeign: s.optionalNullable(s.string()),
  employeeStartDate: s.optionalNullable(s.dateTime()),
  isSocialSecurityRegistered: s.optional(s.boolean()),
  bankBranchCode: s.optionalNullable(s.string()),
  accountType: s.optional(s.lazy(() => bankAccountTypeSchema)),
  referenceId: s.optionalNullable(s.string()),
  isMigrate: s.optional(s.boolean()),
  employee: s.optional(s.lazy(() => employeeInternalSchema)),
  expenseList: s.optional(s.lazy(() => expenseListInternalSchema)),
  payroll: s.optional(s.lazy(() => payrollInternalSchema)),
  bank: s.optional(s.lazy(() => bankInternalSchema)),
  lastModifiedByUser: s.optional(s.lazy(() => userInternalSchema)),
  ruleCompileStatus: s.optional(s.lazy(() => ruleCompileStatusSchema)),
  employerAccountBranch: s.optionalNullable(s.string()),
  employerAccountNumber: s.optionalNullable(s.string()),
  bankAccountId: s.optionalNullable(s.int()),
  paymentRemarks: s.optionalNullable(s.string()),
  payrollPaymentId: s.optionalNullable(s.int()),
  kcProcessingStatus: s.optionalNullable(s.int()),
  departmentId: s.optionalNullable(s.int()),
  departmentName: s.optionalNullable(s.string()),
  departmentCode: s.optionalNullable(s.string()),
  workDays: s.optionalNullable(s.float64()),
  wage: s.optionalNullable(s.float64()),
  isSocialSecurityAutoCal: s.optional(s.boolean()),
  socialSecurityPercent: s.defaulted(s.float64(), 5),
  sendEmailStatus: s.optional(s.lazy(() => sendEmailStatusSchema)),
  studentLoan: s.optional(s.float64()),
  conditionsWithholdingTax: s.optional(s.lazy(() => conditionsOfWithholdingTaxSchema)),
  overtimePnd: s.optionalNullable(s.int()),
  commissionPnd: s.optionalNullable(s.int()),
  bonusPnd: s.optionalNullable(s.int()),
  allowancePnd: s.optionalNullable(s.int()),
  colaPnd: s.optionalNullable(s.int()),
  medicalExpensePnd: s.optionalNullable(s.int()),
  accommodationPnd: s.optionalNullable(s.int()),
  directorRemunerationPnd: s.optionalNullable(s.int()),
  otherAdditionPnd: s.optionalNullable(s.int()),
  withholdingTax401: s.optional(s.float64()),
  withholdingTax402: s.optional(s.float64()),
  statusInt: s.optional(s.int()),
  _keysMap: {
    overtimePnd: "overtimePND",
    commissionPnd: "commissionPND",
    bonusPnd: "bonusPND",
    allowancePnd: "allowancePND",
    colaPnd: "colaPND",
    medicalExpensePnd: "medicalExpensePND",
    accommodationPnd: "accommodationPND",
    directorRemunerationPnd: "directorRemunerationPND",
    otherAdditionPnd: "otherAdditionPND",
  },
};

export const payrollDetailInternalSchema: Schema<PayrollDetail> =
  s.object<PayrollDetail>(payrollDetailProperties);

export const payrollDetailSchema: Schema<PayrollDetail> = s.lazySchema(() =>
  s.object<PayrollDetail>({
    ...payrollDetailProperties,
    employee: s.optional(s.lazy(() => employeeSchema)),
    expenseList: s.optional(s.lazy(() => expenseListSchema)),
    payroll: s.optional(s.lazy(() => payrollSchema)),
    bank: s.optional(s.lazy(() => bankSchema)),
    lastModifiedByUser: s.optional(s.lazy(() => userSchema)),
  }),
);
