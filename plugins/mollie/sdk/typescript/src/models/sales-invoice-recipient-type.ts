import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of recipient, either `consumer` or `business`. This will determine what further fields
 * are required on the `recipient` object.
 */
export const SalesInvoiceRecipientType = {
  Consumer: "consumer",
  Business: "business",
} as const;
export type SalesInvoiceRecipientType =
  | (typeof SalesInvoiceRecipientType)[keyof typeof SalesInvoiceRecipientType]
  | (string & {});

export const salesInvoiceRecipientTypeSchema: EnumSchema<SalesInvoiceRecipientType> =
  s.enumOf<SalesInvoiceRecipientType>(SalesInvoiceRecipientType);
