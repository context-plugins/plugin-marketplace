import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed with the specified card
 * issuer name. The card issuer name is the name of the bank or financial institution that issued
 * the card used for the transaction. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null
 * for this field.
 */
export type PaymentMethodCardIssuerName = string[];

export const paymentMethodCardIssuerNameSchema: Schema<PaymentMethodCardIssuerName> =
  s.of<PaymentMethodCardIssuerName>(s.union([s.array(s.string())]));
