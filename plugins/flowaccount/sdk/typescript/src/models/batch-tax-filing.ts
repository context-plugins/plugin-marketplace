import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchTaxFilingStatusSchema, type BatchTaxFilingStatus } from "./batch-tax-filing-status.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import { contactInternalSchema, contactSchema, type Contact } from "./contact.js";
import { deductionTypeSchema, type DeductionType } from "./deduction-type.js";
import { galleryInternalSchema, gallerySchema, type Gallery } from "./gallery.js";
import { iDocumentReferenceSchema, type IDocumentReference } from "./idocument-reference.js";
import { partialPaymentMethodSchema, type PartialPaymentMethod } from "./partial-payment-method.js";
import { paymentMethodSchema, type PaymentMethod } from "./payment-method.js";
import { remainingCollectedTypeSchema, type RemainingCollectedType } from "./remaining-collected-type.js";
import { RuleCompileStatus, ruleCompileStatusSchema } from "./rule-compile-status.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type BatchTaxFiling = {
  id?: number;
  companyId: number;
  /** 1 = Awaiting 3 = Refunded */
  status?: BatchTaxFilingStatus;
  claimDate: Date;
  totalBuyValue?: number;
  totalBuyVatValue?: number;
  totalSellValue?: number;
  totalSellVatValue?: number;
  broughtForward?: number;
  value?: number;
  isDelete?: boolean;
  createdBy?: number;
  modifiedBy?: number;
  createdOn: Date;
  modifiedOn: Date;
  company?: Company;
  createdByUser?: User;
  modifiedByUser?: User;
  datePayment?: Date | null;
  charge?: number | null;
  collected?: number | null;
  tax?: number | null;
  remarks?: string | null;
  paymentWithHeld?: number;
  remainingCollected?: number | null;
  remainingCollectedType?: RemainingCollectedType;
  deductionAmount?: number | null;
  paymentDeductionType?: DeductionType;
  bankAccountId?: number | null;
  checkNumber?: string | null;
  checkBankId?: string | null;
  transferBankId?: string | null;
  bankAccountNumber?: string | null;
  checkDatePaid?: Date | null;
  methodPayment?: PaymentMethod;
  no?: number;
  pettyCashName?: string | null;
  pettyCashId?: number | null;
  chequeId?: number | null;
  creditCardId?: number | null;
  otherChannelId?: number | null;
  documentSerial?: string | null;
  documentId?: string | null;
  approved?: boolean;
  publishedOn?: Date;
  documentDate?: Date;
  vatRate?: number;
  dueDate?: Date | null;
  name?: string | null;
  internalNotes?: string | null;
  roundingAdjustment?: number;
  gallery?: Gallery;
  galleryId?: number | null;
  contact?: Contact;
  contactId?: number;
  documentReferences?: IDocumentReference[] | null;
  referencedToMe?: IDocumentReference[] | null;
  referencedByMe?: IDocumentReference[] | null;
  statusInt?: number;
  isInlineDiscount?: boolean;
  isInlineVat?: boolean;
  vatValue?: number | null;
  documentSerialNoPrefix?: number | null;
  inlineVatValue?: number;
  inlineDiscountValue?: number;
  published?: boolean;
  isVatInclusive?: boolean;
  runningNumberType?: number;
  runningModifiedOn?: Date | null;
  exemptAmount?: number;
  vatableAmount?: number;
  totalAfterDiscount?: number;
  subTotal?: number;
  isReCalculate?: boolean;
  partialPaymentMethod?: PartialPaymentMethod;
  vatAmount?: number | null;
  isMigrate?: boolean;
  resetTransactionId?: number | null;
  /** @default RuleCompileStatus._1 */
  ruleCompileStatus?: RuleCompileStatus;
  chequeCashingDate?: Date | null;
  projectId?: number | null;
  projectName?: string | null;
  projectNameAndProjectDeatil?: string | null;
  reconciled?: boolean;
  outstanding?: number;
  withholding?: number | null;
  refDocumentStatus?: number;
  refDocumentStatusString?: string | null;
  documentDeductionType?: DeductionType;
};

const batchTaxFilingProperties: s.Shape<BatchTaxFiling> = {
  id: s.optional(s.int()),
  companyId: s.int(),
  status: s.optional(s.lazy(() => batchTaxFilingStatusSchema)),
  claimDate: s.dateTime(),
  totalBuyValue: s.optional(s.float64()),
  totalBuyVatValue: s.optional(s.float64()),
  totalSellValue: s.optional(s.float64()),
  totalSellVatValue: s.optional(s.float64()),
  broughtForward: s.optional(s.float64()),
  value: s.optional(s.float64()),
  isDelete: s.optional(s.boolean()),
  createdBy: s.optional(s.int()),
  modifiedBy: s.optional(s.int()),
  createdOn: s.dateTime(),
  modifiedOn: s.dateTime(),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  createdByUser: s.optional(s.lazy(() => userInternalSchema)),
  modifiedByUser: s.optional(s.lazy(() => userInternalSchema)),
  datePayment: s.optionalNullable(s.dateTime()),
  charge: s.optionalNullable(s.float64()),
  collected: s.optionalNullable(s.float64()),
  tax: s.optionalNullable(s.float64()),
  remarks: s.optionalNullable(s.string()),
  paymentWithHeld: s.optional(s.float64()),
  remainingCollected: s.optionalNullable(s.float64()),
  remainingCollectedType: s.optional(s.lazy(() => remainingCollectedTypeSchema)),
  deductionAmount: s.optionalNullable(s.float64()),
  paymentDeductionType: s.optional(s.lazy(() => deductionTypeSchema)),
  bankAccountId: s.optionalNullable(s.int()),
  checkNumber: s.optionalNullable(s.string()),
  checkBankId: s.optionalNullable(s.string()),
  transferBankId: s.optionalNullable(s.string()),
  bankAccountNumber: s.optionalNullable(s.string()),
  checkDatePaid: s.optionalNullable(s.dateTime()),
  methodPayment: s.optional(s.lazy(() => paymentMethodSchema)),
  no: s.optional(s.int()),
  pettyCashName: s.optionalNullable(s.string()),
  pettyCashId: s.optionalNullable(s.int()),
  chequeId: s.optionalNullable(s.int()),
  creditCardId: s.optionalNullable(s.int()),
  otherChannelId: s.optionalNullable(s.int()),
  documentSerial: s.optionalNullable(s.string()),
  documentId: s.optionalNullable(s.string()),
  approved: s.optional(s.boolean()),
  publishedOn: s.optional(s.dateTime()),
  documentDate: s.optional(s.dateTime()),
  vatRate: s.optional(s.int()),
  dueDate: s.optionalNullable(s.dateTime()),
  name: s.optionalNullable(s.string()),
  internalNotes: s.optionalNullable(s.string()),
  roundingAdjustment: s.optional(s.float64()),
  gallery: s.optional(s.lazy(() => galleryInternalSchema)),
  galleryId: s.optionalNullable(s.int()),
  contact: s.optional(s.lazy(() => contactInternalSchema)),
  contactId: s.optional(s.int()),
  documentReferences: s.optionalNullable(s.array(s.lazy(() => iDocumentReferenceSchema))),
  referencedToMe: s.optionalNullable(s.array(s.lazy(() => iDocumentReferenceSchema))),
  referencedByMe: s.optionalNullable(s.array(s.lazy(() => iDocumentReferenceSchema))),
  statusInt: s.optional(s.int()),
  isInlineDiscount: s.optional(s.boolean()),
  isInlineVat: s.optional(s.boolean()),
  vatValue: s.optionalNullable(s.float64()),
  documentSerialNoPrefix: s.optionalNullable(s.int()),
  inlineVatValue: s.optional(s.float64()),
  inlineDiscountValue: s.optional(s.float64()),
  published: s.optional(s.boolean()),
  isVatInclusive: s.optional(s.boolean()),
  runningNumberType: s.optional(s.int()),
  runningModifiedOn: s.optionalNullable(s.dateTime()),
  exemptAmount: s.optional(s.float64()),
  vatableAmount: s.optional(s.float64()),
  totalAfterDiscount: s.optional(s.float64()),
  subTotal: s.optional(s.float64()),
  isReCalculate: s.optional(s.boolean()),
  partialPaymentMethod: s.optional(s.lazy(() => partialPaymentMethodSchema)),
  vatAmount: s.optionalNullable(s.float64()),
  isMigrate: s.optional(s.boolean()),
  resetTransactionId: s.optionalNullable(s.int()),
  ruleCompileStatus: s.defaulted(ruleCompileStatusSchema, RuleCompileStatus._1),
  chequeCashingDate: s.optionalNullable(s.dateTime()),
  projectId: s.optionalNullable(s.int()),
  projectName: s.optionalNullable(s.string()),
  projectNameAndProjectDeatil: s.optionalNullable(s.string()),
  reconciled: s.optional(s.boolean()),
  outstanding: s.optional(s.float64()),
  withholding: s.optionalNullable(s.int()),
  refDocumentStatus: s.optional(s.int()),
  refDocumentStatusString: s.optionalNullable(s.string()),
  documentDeductionType: s.optional(s.lazy(() => deductionTypeSchema)),
};

export const batchTaxFilingInternalSchema: Schema<BatchTaxFiling> =
  s.object<BatchTaxFiling>(batchTaxFilingProperties);

export const batchTaxFilingSchema: Schema<BatchTaxFiling> = s.lazySchema(() =>
  s.object<BatchTaxFiling>({
    ...batchTaxFilingProperties,
    company: s.optional(s.lazy(() => companySchema)),
    createdByUser: s.optional(s.lazy(() => userSchema)),
    modifiedByUser: s.optional(s.lazy(() => userSchema)),
    gallery: s.optional(s.lazy(() => gallerySchema)),
    contact: s.optional(s.lazy(() => contactSchema)),
  }),
);
