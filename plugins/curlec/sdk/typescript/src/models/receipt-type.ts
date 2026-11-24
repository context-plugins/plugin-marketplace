import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReceiptType = {
  TaxInvoice: "tax_invoice",
  SalesInvoice: "sales_invoice",
  BillOfSupply: "bill_of_supply",
  CreditNote: "credit_note",
  DebitNote: "debit_note",
} as const;
export type ReceiptType = (typeof ReceiptType)[keyof typeof ReceiptType] | (string & {});

export const receiptTypeSchema: EnumSchema<ReceiptType> = s.enumOf<ReceiptType>(ReceiptType);
