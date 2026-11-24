import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Record Invoice payment status enum. */
export const RecordInvoicePaymentStatus = {
  Paid: "PAID",
  Void: "VOID",
  Scheduled: "SCHEDULED",
  Canceled: "CANCELED",
  Escheated: "ESCHEATED",
  Undefined: "UNDEFINED",
} as const;
export type RecordInvoicePaymentStatus =
  | (typeof RecordInvoicePaymentStatus)[keyof typeof RecordInvoicePaymentStatus]
  | (string & {});

export const recordInvoicePaymentStatusSchema: EnumSchema<RecordInvoicePaymentStatus> =
  s.enumOf<RecordInvoicePaymentStatus>(RecordInvoicePaymentStatus);
