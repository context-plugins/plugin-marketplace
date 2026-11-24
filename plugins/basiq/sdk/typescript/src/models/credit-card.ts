import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditCard = {
  /** The minimum payment amount due for the next card payment. */
  minPaymentAmount: string;
  /** The amount due for the next card payment. */
  paymentDueAmount: string;
  /** If absent assumes AUD. */
  paymentCurrency?: string;
  /** Date that the next payment for the card is due. */
  paymentDueDate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditCardSchema: Schema<CreditCard> = s.object<CreditCard>(
  {
    minPaymentAmount: s.string(),
    paymentDueAmount: s.string(),
    paymentCurrency: s.optional(s.string()),
    paymentDueDate: s.string(),
  },
  { additionalProperties: s.json() },
);
