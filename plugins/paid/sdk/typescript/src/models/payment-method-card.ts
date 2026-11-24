import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Card details (present when type is 'card') */
export type PaymentMethodCard = {
  /** Card brand (visa, mastercard, amex, etc.) */
  brand?: string;
  /** Last 4 digits of the card number */
  last4?: string;
  /** Expiration month (1-12) */
  expMonth?: number;
  /** Expiration year */
  expYear?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentMethodCardSchema: Schema<PaymentMethodCard> = s.object<PaymentMethodCard>(
  {
    brand: s.optional(s.string()),
    last4: s.optional(s.string()),
    expMonth: s.optional(s.int()),
    expYear: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
