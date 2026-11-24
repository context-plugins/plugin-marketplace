import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceStatusPaidOrdersApi = {
  Draft: "draft",
  Open: "open",
  Paid: "paid",
  Void: "void",
  Uncollectible: "uncollectible",
} as const;
export type InvoiceStatusPaidOrdersApi =
  | (typeof InvoiceStatusPaidOrdersApi)[keyof typeof InvoiceStatusPaidOrdersApi]
  | (string & {});

export const invoiceStatusPaidOrdersApiSchema: EnumSchema<InvoiceStatusPaidOrdersApi> =
  s.enumOf<InvoiceStatusPaidOrdersApi>(InvoiceStatusPaidOrdersApi);
