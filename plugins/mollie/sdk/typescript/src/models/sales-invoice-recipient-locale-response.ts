import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The locale for the recipient, to be used for translations in PDF generation and payment pages.
 */
export const SalesInvoiceRecipientLocaleResponse = {
  EnUs: "en_US",
  EnGb: "en_GB",
  NlNl: "nl_NL",
  NlBe: "nl_BE",
  DeDe: "de_DE",
  DeAt: "de_AT",
  DeCh: "de_CH",
  FrFr: "fr_FR",
  FrBe: "fr_BE",
} as const;
export type SalesInvoiceRecipientLocaleResponse =
  | (typeof SalesInvoiceRecipientLocaleResponse)[keyof typeof SalesInvoiceRecipientLocaleResponse]
  | (string & {});

export const salesInvoiceRecipientLocaleResponseSchema: EnumSchema<SalesInvoiceRecipientLocaleResponse> =
  s.enumOf<SalesInvoiceRecipientLocaleResponse>(SalesInvoiceRecipientLocaleResponse);
