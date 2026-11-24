import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentTypesSchema, type DocumentTypes } from "./document-types.js";
import { journalEntryStatusSchema, type JournalEntryStatus } from "./journal-entry-status.js";
import {
  journalEntryTemplateTypeSchema,
  type JournalEntryTemplateType,
} from "./journal-entry-template-type.js";
import { ruleCompileStatusSchema, type RuleCompileStatus } from "./rule-compile-status.js";
import { runningNumberTypeSchema, type RunningNumberType } from "./running-number-type.js";

export type IJournalEntryBase = {
  id?: number;
  companyId?: number;
  documentSerial?: string | null;
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
  /** 0 = Delete 1 = Awaiting 5 = Approved 9 = Void */
  status?: JournalEntryStatus;
  documentDate?: Date;
  description?: string | null;
  descriptionForeign?: string | null;
  voidDescription?: string | null;
  createdOn?: Date;
  modifiedOn?: Date;
  voidedOn?: Date | null;
  approvedOn?: Date | null;
  transactionNo?: number | null;
  note?: string | null;
  /**
   * 1 = Default 3 = DocumentCreated 5 = Payment 7 = ChequeDate 9 = TaxNoRefund 11 =
   * VATManagementHistory
   */
  templateType?: JournalEntryTemplateType;
  contactName?: string | null;
  documentSerialNoPrefix?: number | null;
  createdBy?: number;
  modifiedBy?: number;
  approvedBy?: number | null;
  voidedBy?: number | null;
  galleryId?: number | null;
  contactId?: number | null;
  runningNumberType?: RunningNumberType;
  fiscalYearId?: number | null;
  reference?: string | null;
  referenceId?: number | null;
  referenceDocumentType?: DocumentTypes;
  isSystemDocument?: boolean;
  /** 1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore */
  ruleCompileStatus?: RuleCompileStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iJournalEntryBaseSchema: Schema<IJournalEntryBase> = s.object<IJournalEntryBase>(
  {
    id: s.optional(s.int()),
    companyId: s.optional(s.int()),
    documentSerial: s.optionalNullable(s.string()),
    documentType: s.optional(s.lazy(() => documentTypesSchema)),
    status: s.optional(s.lazy(() => journalEntryStatusSchema)),
    documentDate: s.optional(s.dateTime()),
    description: s.optionalNullable(s.string()),
    descriptionForeign: s.optionalNullable(s.string()),
    voidDescription: s.optionalNullable(s.string()),
    createdOn: s.optional(s.dateTime()),
    modifiedOn: s.optional(s.dateTime()),
    voidedOn: s.optionalNullable(s.dateTime()),
    approvedOn: s.optionalNullable(s.dateTime()),
    transactionNo: s.optionalNullable(s.int()),
    note: s.optionalNullable(s.string()),
    templateType: s.optional(s.lazy(() => journalEntryTemplateTypeSchema)),
    contactName: s.optionalNullable(s.string()),
    documentSerialNoPrefix: s.optionalNullable(s.int()),
    createdBy: s.optional(s.int()),
    modifiedBy: s.optional(s.int()),
    approvedBy: s.optionalNullable(s.int()),
    voidedBy: s.optionalNullable(s.int()),
    galleryId: s.optionalNullable(s.int()),
    contactId: s.optionalNullable(s.int()),
    runningNumberType: s.optional(s.lazy(() => runningNumberTypeSchema)),
    fiscalYearId: s.optionalNullable(s.int()),
    reference: s.optionalNullable(s.string()),
    referenceId: s.optionalNullable(s.int()),
    referenceDocumentType: s.optional(s.lazy(() => documentTypesSchema)),
    isSystemDocument: s.optional(s.boolean()),
    ruleCompileStatus: s.optional(s.lazy(() => ruleCompileStatusSchema)),
  },
  { additionalProperties: s.json() },
);
