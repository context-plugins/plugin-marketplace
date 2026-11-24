import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceSource = {
  OrderBased: "order_based",
  Manual: "manual",
} as const;
export type InvoiceSource = (typeof InvoiceSource)[keyof typeof InvoiceSource] | (string & {});

export const invoiceSourceSchema: EnumSchema<InvoiceSource> = s.enumOf<InvoiceSource>(InvoiceSource);
