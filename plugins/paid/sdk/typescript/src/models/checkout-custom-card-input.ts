import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CheckoutCustomCardInput = {
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

const checkoutCustomCardInputProperties: s.Shape<CheckoutCustomCardInput> = {
  label: s.string(),
  priceText: s.optional(s.string()),
  buttonText: s.optional(s.string()),
  buttonUrl: s.optional(s.string()),
};

export const checkoutCustomCardInputInternalSchema: Schema<CheckoutCustomCardInput> =
  s.object<CheckoutCustomCardInput>(checkoutCustomCardInputProperties, { additionalProperties: s.json() });

export const checkoutCustomCardInputSchema: Schema<CheckoutCustomCardInput> = s.lazySchema(() =>
  s.object<CheckoutCustomCardInput>(
    {
      ...checkoutCustomCardInputProperties,
      buttonUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
