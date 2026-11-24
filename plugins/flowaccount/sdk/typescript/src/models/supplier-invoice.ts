import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import { documentTypesSchema, type DocumentTypes } from "./document-types.js";
import { galleryInternalSchema, gallerySchema, type Gallery } from "./gallery.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type SupplierInvoice = {
  id?: number;
  companyId: number;
  documentDate: Date;
  documentSerial?: string | null;
  contactName?: string | null;
  contactTaxId?: string | null;
  contactBranch?: string | null;
  isDelete?: boolean;
  galleryId?: number | null;
  referenceDocumentId?: number;
  /**
   * 1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 =
   * Vendor 17 = WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 =
   * PurchaseTax 25 = ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 =
   * CashInvoice 37 = PaymentSlip 51 = JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 =
   * PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance 63 = Transaction 65 =
   * SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
   * DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher
   * 159 = DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 =
   * PayrollPayment
   */
  referenceDocumentType?: DocumentTypes;
  createdBy?: number;
  modifiedBy?: number;
  createdOn: Date;
  modifiedOn: Date;
  company?: Company;
  createdByUser?: User;
  modifiedByUser?: User;
  gallery?: Gallery;
};

const supplierInvoiceProperties: s.Shape<SupplierInvoice> = {
  id: s.optional(s.int()),
  companyId: s.int(),
  documentDate: s.dateTime(),
  documentSerial: s.optionalNullable(s.string()),
  contactName: s.optionalNullable(s.string()),
  contactTaxId: s.optionalNullable(s.string()),
  contactBranch: s.optionalNullable(s.string()),
  isDelete: s.optional(s.boolean()),
  galleryId: s.optionalNullable(s.int()),
  referenceDocumentId: s.optional(s.int()),
  referenceDocumentType: s.optional(s.lazy(() => documentTypesSchema)),
  createdBy: s.optional(s.int()),
  modifiedBy: s.optional(s.int()),
  createdOn: s.dateTime(),
  modifiedOn: s.dateTime(),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  createdByUser: s.optional(s.lazy(() => userInternalSchema)),
  modifiedByUser: s.optional(s.lazy(() => userInternalSchema)),
  gallery: s.optional(s.lazy(() => galleryInternalSchema)),
};

export const supplierInvoiceInternalSchema: Schema<SupplierInvoice> =
  s.object<SupplierInvoice>(supplierInvoiceProperties);

export const supplierInvoiceSchema: Schema<SupplierInvoice> = s.lazySchema(() =>
  s.object<SupplierInvoice>({
    ...supplierInvoiceProperties,
    company: s.optional(s.lazy(() => companySchema)),
    createdByUser: s.optional(s.lazy(() => userSchema)),
    modifiedByUser: s.optional(s.lazy(() => userSchema)),
    gallery: s.optional(s.lazy(() => gallerySchema)),
  }),
);
