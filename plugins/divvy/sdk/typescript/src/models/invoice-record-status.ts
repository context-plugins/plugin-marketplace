import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Record status enum for invoices. */
export const InvoiceRecordStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Draft: "DRAFT",
  Undefined: "UNDEFINED",
} as const;
export type InvoiceRecordStatus =
  | (typeof InvoiceRecordStatus)[keyof typeof InvoiceRecordStatus]
  | (string & {});

export const invoiceRecordStatusSchema: EnumSchema<InvoiceRecordStatus> =
  s.enumOf<InvoiceRecordStatus>(InvoiceRecordStatus);
