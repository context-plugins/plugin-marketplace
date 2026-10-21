import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of recipient, either `consumer` or `business`. This will determine what further fields
 * are required on the `recipient` object.
 */
export const SalesInvoiceRecipientTypeResponse = {
  Consumer: "consumer",
  Business: "business",
} as const;
export type SalesInvoiceRecipientTypeResponse =
  | (typeof SalesInvoiceRecipientTypeResponse)[keyof typeof SalesInvoiceRecipientTypeResponse]
  | (string & {});

export const salesInvoiceRecipientTypeResponseSchema: EnumSchema<SalesInvoiceRecipientTypeResponse> =
  s.enumOf<SalesInvoiceRecipientTypeResponse>(SalesInvoiceRecipientTypeResponse);
