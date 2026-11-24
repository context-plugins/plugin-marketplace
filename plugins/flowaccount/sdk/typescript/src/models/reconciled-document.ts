import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankInternalSchema, bankSchema, type Bank } from "./bank.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import { documentTypesSchema, type DocumentTypes } from "./document-types.js";

export type ReconciledDocument = {
  documentId?: number;
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
  documentType?: DocumentTypes;
  transactionId?: string | null;
  amount?: number;
  fromAccount?: string | null;
  channel?: string | null;
  description?: string | null;
  accountNumber: string;
  bankId?: number;
  companyId?: number;
  bank?: Bank;
  company?: Company;
};

const reconciledDocumentProperties: s.Shape<ReconciledDocument> = {
  documentId: s.optional(s.int()),
  documentType: s.optional(s.lazy(() => documentTypesSchema)),
  transactionId: s.optionalNullable(s.string()),
  amount: s.optional(s.float64()),
  fromAccount: s.optionalNullable(s.string()),
  channel: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  accountNumber: s.string(),
  bankId: s.optional(s.int()),
  companyId: s.optional(s.int()),
  bank: s.optional(s.lazy(() => bankInternalSchema)),
  company: s.optional(s.lazy(() => companyInternalSchema)),
};

export const reconciledDocumentInternalSchema: Schema<ReconciledDocument> = s.object<ReconciledDocument>(
  reconciledDocumentProperties,
);

export const reconciledDocumentSchema: Schema<ReconciledDocument> = s.lazySchema(() =>
  s.object<ReconciledDocument>({
    ...reconciledDocumentProperties,
    transactionId: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(255))),
    accountNumber: s.string().check(s.minLength(0), s.maxLength(255)),
    bank: s.optional(s.lazy(() => bankSchema)),
    company: s.optional(s.lazy(() => companySchema)),
  }),
);
