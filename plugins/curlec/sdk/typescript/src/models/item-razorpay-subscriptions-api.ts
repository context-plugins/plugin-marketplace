import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ItemRazorpaySubscriptionsApi = {
  name?: string;
  /** Addon amount in paise. */
  amount?: number;
  /** @default "INR" */
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemRazorpaySubscriptionsApiSchema: Schema<ItemRazorpaySubscriptionsApi> =
  s.object<ItemRazorpaySubscriptionsApi>(
    {
      name: s.optional(s.string()),
      amount: s.optional(s.int()),
      currency: s.defaulted(s.string(), "INR"),
    },
    { additionalProperties: s.json() },
  );
