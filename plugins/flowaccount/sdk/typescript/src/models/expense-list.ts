import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  batchTaxFilingInternalSchema,
  batchTaxFilingSchema,
  type BatchTaxFiling,
} from "./batch-tax-filing.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import { contactInternalSchema, contactSchema, type Contact } from "./contact.js";
import { currencySchema, type Currency } from "./currency.js";
import { deductionTypeSchema, type DeductionType } from "./deduction-type.js";
import { entitySchema, type Entity } from "./entity.js";
import {
  expenseCategoryInternalSchema,
  expenseCategorySchema,
  type ExpenseCategory,
} from "./expense-category.js";
import { expenseStatusSchema, type ExpenseStatus } from "./expense-status.js";
import { galleryInternalSchema, gallerySchema, type Gallery } from "./gallery.js";
import { iDocumentReferenceSchema, type IDocumentReference } from "./idocument-reference.js";
import { incomeTypeSchema, type IncomeType } from "./income-type.js";
import { partialPaymentMethodSchema, type PartialPaymentMethod } from "./partial-payment-method.js";
import { paymentMethodSchema, type PaymentMethod } from "./payment-method.js";
import { payrollDetailInternalSchema, payrollDetailSchema, type PayrollDetail } from "./payroll-detail.js";
import { remainingCollectedTypeSchema, type RemainingCollectedType } from "./remaining-collected-type.js";
import { ruleCompileStatusSchema, type RuleCompileStatus } from "./rule-compile-status.js";
import { supplierInvoiceStatusSchema, type SupplierInvoiceStatus } from "./supplier-invoice-status.js";

export type ExpenseList = {
  id?: number;
  vendorCompanyId?: number | null;
  companyId?: number;
  /**
   * 1 = Awaiting 3 = Approved 4 = PendingPayment 5 = Paid 6 = PaidByPaymentSlip 7 = Void 9 =
   * ApprovedAndProcessed 11 = Received 23 = ReceivedByPaymentSlip
   */
  status?: ExpenseStatus;
  receiptImage?: string | null;
  value?: number;
  description?: string | null;
  expenseCategoryId?: number;
  documentSerial?: string | null;
  documentId?: string | null;
  publishedOn?: Date;
  expenseDate?: Date;
  documentDate?: Date;
  createdOn?: Date;
  createdBy?: number;
  modifiedOn?: Date;
  published?: boolean;
  approved?: boolean;
  approvedBy?: number;
  remarks?: string | null;
  isTax?: boolean;
  isDelete?: boolean;
  taxRefundable?: boolean;
  galleryId?: number | null;
  reconciled?: boolean;
  nullableContactId?: number | null;
  bankAccountNumber?: string | null;
  isVatInclusive?: boolean;
  methodPayment?: PaymentMethod;
  vendorName?: string | null;
  addressLocal?: string | null;
  addressLocalLine2?: string | null;
  addressLocalLine3?: string | null;
  companyTaxId?: string | null;
  branch?: string | null;
  vatRate?: number;
  tax?: number | null;
  valueIncludeVat?: number;
  vatAmount?: number | null;
  documentSerialNoPrefix?: number | null;
  withholding?: number | null;
  charge?: number | null;
  datePayment?: Date | null;
  checkNumber?: string | null;
  checkBankId?: string | null;
  checkDatePaid?: Date | null;
  transferBankId?: string | null;
  /** @default 0 */
  collected?: number;
  /** @default 0 */
  outstanding?: number;
  /** @default 0 */
  paymentWithHeld?: number;
  resetTransactionId?: number | null;
  bankAccountId?: number | null;
  /** 1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore */
  ruleCompileStatus?: RuleCompileStatus;
  remainingCollected?: number | null;
  remainingCollectedType?: RemainingCollectedType;
  company?: Company;
  vendorCompany?: Company;
  expenseCategory?: ExpenseCategory;
  gallery?: Gallery;
  contact?: Contact;
  runningNumberType?: number;
  runningModifiedOn?: Date | null;
  isForeignCurrency?: boolean;
  foreignCurrency?: Currency;
  exchangeRate?: number | null;
  foreignValue?: number | null;
  exemptAmount?: number;
  vatableAmount?: number;
  totalAfterDiscount?: number;
  dueDate?: Date | null;
  subTotal?: number;
  payrollDetail?: PayrollDetail[] | null;
  batchTaxFilingId?: number | null;
  batchTaxFiling?: BatchTaxFiling;
  supplierInvoiceStatus?: SupplierInvoiceStatus;
  saleAndPurchaseChannel?: string | null;
  pettyCashName?: string | null;
  pettyCashId?: number | null;
  chequeId?: number | null;
  creditCardId?: number | null;
  otherChannelId?: number | null;
  chequeCashingDate?: Date | null;
  autoCreateWithholdingTax?: boolean | null;
  withholdingTaxIncomeType?: IncomeType;
  withholdingTaxIncomeDescription?: string | null;
  withholdingTaxEntity?: Entity;
  exchangeRatio?: number | null;
  isManualRate?: boolean | null;
  exchangeRateDate?: Date | null;
  companyCurrencyId?: number | null;
  foreignInlineVatValue?: number | null;
  foreignInlineDiscountValue?: number | null;
  foreignVatAmount?: number | null;
  foreignDeductionAmount?: number | null;
  projectId?: number | null;
  isManualVat?: boolean | null;
  externalDocumentId?: string | null;
  batchId?: string | null;
  documentReferences?: IDocumentReference[] | null;
  referencedToMe?: IDocumentReference[] | null;
  referencedByMe?: IDocumentReference[] | null;
  statusInt?: number;
  partialPaymentMethod?: PartialPaymentMethod;
  refDocumentStatus?: number;
  refDocumentStatusString?: string | null;
  isReCalculate?: boolean;
  inlineVatValue?: number;
  inlineDiscountValue?: number;
  isMigrate?: boolean;
  vatValue?: number | null;
  deductionAmount?: number | null;
  paymentDeductionType?: DeductionType;
  documentDeductionType?: DeductionType;
  isInlineDiscount?: boolean;
  isInlineVat?: boolean;
  contactId?: number;
  valueExcludeVat?: number;
  roundingAdjustment?: number;
  name?: string | null;
  internalNotes?: string | null;
  projectName?: string | null;
  projectNameAndProjectDeatil?: string | null;
};

const expenseListProperties: s.Shape<ExpenseList> = {
  id: s.optional(s.int()),
  vendorCompanyId: s.optionalNullable(s.int()),
  companyId: s.optional(s.int()),
  status: s.optional(s.lazy(() => expenseStatusSchema)),
  receiptImage: s.optionalNullable(s.string()),
  value: s.optional(s.float64()),
  description: s.optionalNullable(s.string()),
  expenseCategoryId: s.optional(s.int()),
  documentSerial: s.optionalNullable(s.string()),
  documentId: s.optionalNullable(s.string()),
  publishedOn: s.optional(s.dateTime()),
  expenseDate: s.optional(s.dateTime()),
  documentDate: s.optional(s.dateTime()),
  createdOn: s.optional(s.dateTime()),
  createdBy: s.optional(s.int()),
  modifiedOn: s.optional(s.dateTime()),
  published: s.optional(s.boolean()),
  approved: s.optional(s.boolean()),
  approvedBy: s.optional(s.int()),
  remarks: s.optionalNullable(s.string()),
  isTax: s.optional(s.boolean()),
  isDelete: s.optional(s.boolean()),
  taxRefundable: s.optional(s.boolean()),
  galleryId: s.optionalNullable(s.int()),
  reconciled: s.optional(s.boolean()),
  nullableContactId: s.optionalNullable(s.int()),
  bankAccountNumber: s.optionalNullable(s.string()),
  isVatInclusive: s.optional(s.boolean()),
  methodPayment: s.optional(s.lazy(() => paymentMethodSchema)),
  vendorName: s.optionalNullable(s.string()),
  addressLocal: s.optionalNullable(s.string()),
  addressLocalLine2: s.optionalNullable(s.string()),
  addressLocalLine3: s.optionalNullable(s.string()),
  companyTaxId: s.optionalNullable(s.string()),
  branch: s.optionalNullable(s.string()),
  vatRate: s.optional(s.int()),
  tax: s.optionalNullable(s.float64()),
  valueIncludeVat: s.optional(s.float64()),
  vatAmount: s.optionalNullable(s.float64()),
  documentSerialNoPrefix: s.optionalNullable(s.int()),
  withholding: s.optionalNullable(s.int()),
  charge: s.optionalNullable(s.float64()),
  datePayment: s.optionalNullable(s.dateTime()),
  checkNumber: s.optionalNullable(s.string()),
  checkBankId: s.optionalNullable(s.string()),
  checkDatePaid: s.optionalNullable(s.dateTime()),
  transferBankId: s.optionalNullable(s.string()),
  collected: s.defaulted(s.float64(), 0),
  outstanding: s.defaulted(s.float64(), 0),
  paymentWithHeld: s.defaulted(s.float64(), 0),
  resetTransactionId: s.optionalNullable(s.int()),
  bankAccountId: s.optionalNullable(s.int()),
  ruleCompileStatus: s.optional(s.lazy(() => ruleCompileStatusSchema)),
  remainingCollected: s.optionalNullable(s.float64()),
  remainingCollectedType: s.optional(s.lazy(() => remainingCollectedTypeSchema)),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  vendorCompany: s.optional(s.lazy(() => companyInternalSchema)),
  expenseCategory: s.optional(s.lazy(() => expenseCategoryInternalSchema)),
  gallery: s.optional(s.lazy(() => galleryInternalSchema)),
  contact: s.optional(s.lazy(() => contactInternalSchema)),
  runningNumberType: s.optional(s.int()),
  runningModifiedOn: s.optionalNullable(s.dateTime()),
  isForeignCurrency: s.optional(s.boolean()),
  foreignCurrency: s.optional(s.lazy(() => currencySchema)),
  exchangeRate: s.optionalNullable(s.float64()),
  foreignValue: s.optionalNullable(s.float64()),
  exemptAmount: s.optional(s.float64()),
  vatableAmount: s.optional(s.float64()),
  totalAfterDiscount: s.optional(s.float64()),
  dueDate: s.optionalNullable(s.dateTime()),
  subTotal: s.optional(s.float64()),
  payrollDetail: s.optionalNullable(s.array(s.lazy(() => payrollDetailInternalSchema))),
  batchTaxFilingId: s.optionalNullable(s.int()),
  batchTaxFiling: s.optional(s.lazy(() => batchTaxFilingInternalSchema)),
  supplierInvoiceStatus: s.optional(s.lazy(() => supplierInvoiceStatusSchema)),
  saleAndPurchaseChannel: s.optionalNullable(s.string()),
  pettyCashName: s.optionalNullable(s.string()),
  pettyCashId: s.optionalNullable(s.int()),
  chequeId: s.optionalNullable(s.int()),
  creditCardId: s.optionalNullable(s.int()),
  otherChannelId: s.optionalNullable(s.int()),
  chequeCashingDate: s.optionalNullable(s.dateTime()),
  autoCreateWithholdingTax: s.optionalNullable(s.boolean()),
  withholdingTaxIncomeType: s.optional(s.lazy(() => incomeTypeSchema)),
  withholdingTaxIncomeDescription: s.optionalNullable(s.string()),
  withholdingTaxEntity: s.optional(s.lazy(() => entitySchema)),
  exchangeRatio: s.optionalNullable(s.float64()),
  isManualRate: s.optionalNullable(s.boolean()),
  exchangeRateDate: s.optionalNullable(s.dateTime()),
  companyCurrencyId: s.optionalNullable(s.int()),
  foreignInlineVatValue: s.optionalNullable(s.float64()),
  foreignInlineDiscountValue: s.optionalNullable(s.float64()),
  foreignVatAmount: s.optionalNullable(s.float64()),
  foreignDeductionAmount: s.optionalNullable(s.float64()),
  projectId: s.optionalNullable(s.int()),
  isManualVat: s.optionalNullable(s.boolean()),
  externalDocumentId: s.optionalNullable(s.string()),
  batchId: s.optionalNullable(s.string()),
  documentReferences: s.optionalNullable(s.array(s.lazy(() => iDocumentReferenceSchema))),
  referencedToMe: s.optionalNullable(s.array(s.lazy(() => iDocumentReferenceSchema))),
  referencedByMe: s.optionalNullable(s.array(s.lazy(() => iDocumentReferenceSchema))),
  statusInt: s.optional(s.int()),
  partialPaymentMethod: s.optional(s.lazy(() => partialPaymentMethodSchema)),
  refDocumentStatus: s.optional(s.int()),
  refDocumentStatusString: s.optionalNullable(s.string()),
  isReCalculate: s.optional(s.boolean()),
  inlineVatValue: s.optional(s.float64()),
  inlineDiscountValue: s.optional(s.float64()),
  isMigrate: s.optional(s.boolean()),
  vatValue: s.optionalNullable(s.float64()),
  deductionAmount: s.optionalNullable(s.float64()),
  paymentDeductionType: s.optional(s.lazy(() => deductionTypeSchema)),
  documentDeductionType: s.optional(s.lazy(() => deductionTypeSchema)),
  isInlineDiscount: s.optional(s.boolean()),
  isInlineVat: s.optional(s.boolean()),
  contactId: s.optional(s.int()),
  valueExcludeVat: s.optional(s.float64()),
  roundingAdjustment: s.optional(s.float64()),
  name: s.optionalNullable(s.string()),
  internalNotes: s.optionalNullable(s.string()),
  projectName: s.optionalNullable(s.string()),
  projectNameAndProjectDeatil: s.optionalNullable(s.string()),
};

export const expenseListInternalSchema: Schema<ExpenseList> = s.object<ExpenseList>(expenseListProperties);

export const expenseListSchema: Schema<ExpenseList> = s.lazySchema(() =>
  s.object<ExpenseList>({
    ...expenseListProperties,
    bankAccountNumber: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
    checkNumber: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
    checkBankId: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
    transferBankId: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
    company: s.optional(s.lazy(() => companySchema)),
    vendorCompany: s.optional(s.lazy(() => companySchema)),
    expenseCategory: s.optional(s.lazy(() => expenseCategorySchema)),
    gallery: s.optional(s.lazy(() => gallerySchema)),
    contact: s.optional(s.lazy(() => contactSchema)),
    payrollDetail: s.optionalNullable(s.array(s.lazy(() => payrollDetailSchema))),
    batchTaxFiling: s.optional(s.lazy(() => batchTaxFilingSchema)),
    externalDocumentId: s.optionalNullable(s.string().check(s.maxLength(36))),
    batchId: s.optionalNullable(s.string().check(s.maxLength(36))),
  }),
);
