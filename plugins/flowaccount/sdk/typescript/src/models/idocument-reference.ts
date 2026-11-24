import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentReferenceTypesSchema, type DocumentReferenceTypes } from "./document-reference-types.js";
import { documentTypesSchema, type DocumentTypes } from "./document-types.js";

export type IDocumentReference = {
  id?: number;
  companyId?: number;
  referenceId?: number;
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
  referenceDocumentSerial?: string | null;
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
  documentSerial?: string | null;
  isDelete?: boolean;
  /**
   * 1 = ImportDocument 3 = PartialPayments 5 = Batch 7 = Etax 9 = MiigratePartialPayments 11 =
   * BatchPartialPayments 13 = DepositFirst 15 = DepositLast
   */
  type?: DocumentReferenceTypes;
  documentStatus?: number;
  documentStatusString?: string | null;
  documentDate?: Date;
  documentAmount?: number;
  documentAmountWithVat?: number;
  refDocumentStatus?: number;
  refDocumentStatusString?: string | null;
  refDocumentDate?: Date;
  refDocumentAmount?: number;
  refDocumentAmountWithVat?: number;
  partialPaymentTotalAmount?: number;
  partialPaymentTotalPercent?: number;
  refCreatedOn?: Date;
  refModifiedOn?: Date;
  refIsMigrate?: boolean;
  isCompileRule?: boolean;
  documentCollected?: number;
};

export const iDocumentReferenceSchema: Schema<IDocumentReference> = s.object<IDocumentReference>({
  id: s.optional(s.int()),
  companyId: s.optional(s.int()),
  referenceId: s.optional(s.int()),
  referenceDocumentType: s.optional(s.lazy(() => documentTypesSchema)),
  referenceDocumentSerial: s.optionalNullable(s.string()),
  documentId: s.optional(s.int()),
  documentType: s.optional(s.lazy(() => documentTypesSchema)),
  documentSerial: s.optionalNullable(s.string()),
  isDelete: s.optional(s.boolean()),
  type: s.optional(s.lazy(() => documentReferenceTypesSchema)),
  documentStatus: s.optional(s.int()),
  documentStatusString: s.optionalNullable(s.string()),
  documentDate: s.optional(s.dateTime()),
  documentAmount: s.optional(s.float64()),
  documentAmountWithVat: s.optional(s.float64()),
  refDocumentStatus: s.optional(s.int()),
  refDocumentStatusString: s.optionalNullable(s.string()),
  refDocumentDate: s.optional(s.dateTime()),
  refDocumentAmount: s.optional(s.float64()),
  refDocumentAmountWithVat: s.optional(s.float64()),
  partialPaymentTotalAmount: s.optional(s.float64()),
  partialPaymentTotalPercent: s.optional(s.float64()),
  refCreatedOn: s.optional(s.dateTime()),
  refModifiedOn: s.optional(s.dateTime()),
  refIsMigrate: s.optional(s.boolean()),
  isCompileRule: s.optional(s.boolean()),
  documentCollected: s.optional(s.float64()),
});
