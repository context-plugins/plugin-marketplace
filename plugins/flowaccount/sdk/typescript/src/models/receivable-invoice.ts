import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import { contactInternalSchema, contactSchema, type Contact } from "./contact.js";
import { galleryInternalSchema, gallerySchema, type Gallery } from "./gallery.js";
import { iDocumentReferenceSchema, type IDocumentReference } from "./idocument-reference.js";
import { partialPaymentMethodSchema, type PartialPaymentMethod } from "./partial-payment-method.js";
import { receivableInvoiceStatusSchema, type ReceivableInvoiceStatus } from "./receivable-invoice-status.js";
import { ruleCompileStatusSchema, type RuleCompileStatus } from "./rule-compile-status.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type ReceivableInvoice = {
  id?: number;
  contactId?: number;
  companyId: number;
  /** 1 = Awaiting 3 = Approved 5 = ApprovedAndProcessed 7 = Void 9 = Delete */
  status?: ReceivableInvoiceStatus;
  createdOn: Date;
  modifiedOn: Date;
  publishedOn: Date;
  documentDate: Date;
  published?: boolean;
  approved?: boolean;
  approvedBy?: number | null;
  approvedByClientId?: number | null;
  approvedImageUrl?: string | null;
  documentSerial?: string | null;
  remarks?: string | null;
  name?: string | null;
  value?: number;
  dueDate?: Date | null;
  expectedDate?: Date | null;
  createdBy?: number;
  documentId?: string | null;
  isDelete?: boolean;
  vatRate?: number;
  internalNotes?: string | null;
  galleryId?: number | null;
  isVatInclusive?: boolean;
  salesId?: number | null;
  salesName?: string | null;
  roundingAdjustment?: number;
  /** @default false */
  isInlineDiscount?: boolean;
  /** @default false */
  isInlineVat?: boolean;
  tax?: number | null;
  documentSerialNoPrefix?: number | null;
  vatValue?: number | null;
  resetTransactionId?: number | null;
  contact?: Contact;
  approvedByClient?: User;
  company?: Company;
  createdByUser?: User;
  approvedByUser?: User;
  sales?: User;
  gallery?: Gallery;
  inlineVatValue?: number;
  inlineDiscountValue?: number;
  /** 1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore */
  ruleCompileStatus?: RuleCompileStatus;
  runningNumberType?: number;
  runningModifiedOn?: Date | null;
  exemptAmount?: number;
  vatableAmount?: number;
  totalAfterDiscount?: number;
  subTotal?: number;
  documentReferences?: IDocumentReference[] | null;
  referencedToMe?: IDocumentReference[] | null;
  referencedByMe?: IDocumentReference[] | null;
  statusInt?: number;
  isReCalculate?: boolean;
  partialPaymentMethod?: PartialPaymentMethod;
  vatAmount?: number | null;
  isMigrate?: boolean;
};

const receivableInvoiceProperties: s.Shape<ReceivableInvoice> = {
  id: s.optional(s.int()),
  contactId: s.optional(s.int()),
  companyId: s.int(),
  status: s.optional(s.lazy(() => receivableInvoiceStatusSchema)),
  createdOn: s.dateTime(),
  modifiedOn: s.dateTime(),
  publishedOn: s.dateTime(),
  documentDate: s.dateTime(),
  published: s.optional(s.boolean()),
  approved: s.optional(s.boolean()),
  approvedBy: s.optionalNullable(s.int()),
  approvedByClientId: s.optionalNullable(s.int()),
  approvedImageUrl: s.optionalNullable(s.string()),
  documentSerial: s.optionalNullable(s.string()),
  remarks: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  value: s.optional(s.float64()),
  dueDate: s.optionalNullable(s.dateTime()),
  expectedDate: s.optionalNullable(s.dateTime()),
  createdBy: s.optional(s.int()),
  documentId: s.optionalNullable(s.string()),
  isDelete: s.optional(s.boolean()),
  vatRate: s.optional(s.int()),
  internalNotes: s.optionalNullable(s.string()),
  galleryId: s.optionalNullable(s.int()),
  isVatInclusive: s.optional(s.boolean()),
  salesId: s.optionalNullable(s.int()),
  salesName: s.optionalNullable(s.string()),
  roundingAdjustment: s.optional(s.float64()),
  isInlineDiscount: s.defaulted(s.boolean(), false),
  isInlineVat: s.defaulted(s.boolean(), false),
  tax: s.optionalNullable(s.float64()),
  documentSerialNoPrefix: s.optionalNullable(s.int()),
  vatValue: s.optionalNullable(s.float64()),
  resetTransactionId: s.optionalNullable(s.int()),
  contact: s.optional(s.lazy(() => contactInternalSchema)),
  approvedByClient: s.optional(s.lazy(() => userInternalSchema)),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  createdByUser: s.optional(s.lazy(() => userInternalSchema)),
  approvedByUser: s.optional(s.lazy(() => userInternalSchema)),
  sales: s.optional(s.lazy(() => userInternalSchema)),
  gallery: s.optional(s.lazy(() => galleryInternalSchema)),
  inlineVatValue: s.optional(s.float64()),
  inlineDiscountValue: s.optional(s.float64()),
  ruleCompileStatus: s.optional(s.lazy(() => ruleCompileStatusSchema)),
  runningNumberType: s.optional(s.int()),
  runningModifiedOn: s.optionalNullable(s.dateTime()),
  exemptAmount: s.optional(s.float64()),
  vatableAmount: s.optional(s.float64()),
  totalAfterDiscount: s.optional(s.float64()),
  subTotal: s.optional(s.float64()),
  documentReferences: s.optionalNullable(s.array(s.lazy(() => iDocumentReferenceSchema))),
  referencedToMe: s.optionalNullable(s.array(s.lazy(() => iDocumentReferenceSchema))),
  referencedByMe: s.optionalNullable(s.array(s.lazy(() => iDocumentReferenceSchema))),
  statusInt: s.optional(s.int()),
  isReCalculate: s.optional(s.boolean()),
  partialPaymentMethod: s.optional(s.lazy(() => partialPaymentMethodSchema)),
  vatAmount: s.optionalNullable(s.float64()),
  isMigrate: s.optional(s.boolean()),
};

export const receivableInvoiceInternalSchema: Schema<ReceivableInvoice> =
  s.object<ReceivableInvoice>(receivableInvoiceProperties);

export const receivableInvoiceSchema: Schema<ReceivableInvoice> = s.lazySchema(() =>
  s.object<ReceivableInvoice>({
    ...receivableInvoiceProperties,
    contact: s.optional(s.lazy(() => contactSchema)),
    approvedByClient: s.optional(s.lazy(() => userSchema)),
    company: s.optional(s.lazy(() => companySchema)),
    createdByUser: s.optional(s.lazy(() => userSchema)),
    approvedByUser: s.optional(s.lazy(() => userSchema)),
    sales: s.optional(s.lazy(() => userSchema)),
    gallery: s.optional(s.lazy(() => gallerySchema)),
  }),
);
