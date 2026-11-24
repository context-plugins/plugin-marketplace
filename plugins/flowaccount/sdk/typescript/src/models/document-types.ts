import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 =
 * Vendor 17 = WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 =
 * PurchaseTax 25 = ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 =
 * CashInvoice 37 = PaymentSlip 51 = JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 =
 * PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance 63 = Transaction 65 = SupplierInvoice
 * 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 = DraftJournalEntry
 * 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher 159 =
 * DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 = PayrollPayment
 */
export const DocumentTypes = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _13: 13,
  _15: 15,
  _17: 17,
  _19: 19,
  _21: 21,
  _23: 23,
  _24: 24,
  _25: 25,
  _29: 29,
  _31: 31,
  _33: 33,
  _35: 35,
  _37: 37,
  _51: 51,
  _53: 53,
  _55: 55,
  _57: 57,
  _59: 59,
  _61: 61,
  _63: 63,
  _65: 65,
  _67: 67,
  _69: 69,
  _71: 71,
  _73: 73,
  _151: 151,
  _153: 153,
  _155: 155,
  _157: 157,
  _159: 159,
  _201: 201,
  _202: 202,
  _203: 203,
  _204: 204,
} as const;
export type DocumentTypes = (typeof DocumentTypes)[keyof typeof DocumentTypes] | (number & {});

export const documentTypesSchema: EnumSchema<DocumentTypes> = s.enumOf<DocumentTypes>(DocumentTypes);
