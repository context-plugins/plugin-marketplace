import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchImportStatusSchema, type BatchImportStatus } from "./batch-import-status.js";
import { documentTypesSchema, type DocumentTypes } from "./document-types.js";

export type BatchImportMetadata = {
  companyUserGuid?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  templateId?: string | null;
  batchId?: string | null;
  filename?: string | null;
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
  /** 0 = None 1 = Awaiting 3 = Pending 5 = Failed 6 = HandledDuplicated 7 = Succeed */
  status?: BatchImportStatus;
  documentCount?: number;
  successCount?: number;
  failedCount?: number;
  s3Key?: string | null;
  userId?: number;
  companyId?: number;
  isViewed?: boolean;
};

export const batchImportMetadataSchema: Schema<BatchImportMetadata> = s.object<BatchImportMetadata>({
  companyUserGuid: s.optionalNullable(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  templateId: s.optionalNullable(s.string()),
  batchId: s.optionalNullable(s.string()),
  filename: s.optionalNullable(s.string()),
  documentType: s.optional(s.lazy(() => documentTypesSchema)),
  status: s.optional(s.lazy(() => batchImportStatusSchema)),
  documentCount: s.optional(s.int()),
  successCount: s.optional(s.int()),
  failedCount: s.optional(s.int()),
  s3Key: s.optionalNullable(s.string()),
  userId: s.optional(s.int()),
  companyId: s.optional(s.int()),
  isViewed: s.optional(s.boolean()),
});
