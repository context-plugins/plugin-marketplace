import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceStatus = {
  Building: "building",
  Draft: "draft",
  Pending: "pending",
  Posted: "posted",
  Voided: "voided",
  Canceled: "canceled",
  Error: "error",
} as const;
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus] | (string & {});

export const invoiceStatusSchema: EnumSchema<InvoiceStatus> = s.enumOf<InvoiceStatus>(InvoiceStatus);
