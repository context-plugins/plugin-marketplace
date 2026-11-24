import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CheckoutCustomCard = {
  /** Card title. */
  label: string;
  /** Headline price text, e.g. "$99/mo". */
  priceText?: string;
  /** Call-to-action button label. */
  buttonText?: string;
  /** Call-to-action button URL. */
  buttonUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutCustomCardSchema: Schema<CheckoutCustomCard> = s.object<CheckoutCustomCard>(
  {
    label: s.string(),
    priceText: s.optional(s.string()),
    buttonText: s.optional(s.string()),
    buttonUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
