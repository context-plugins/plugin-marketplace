import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StripeSubscriptionItem = {
  id: string;
  price: string;
  quantity: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stripeSubscriptionItemSchema: Schema<StripeSubscriptionItem> = s.object<StripeSubscriptionItem>(
  {
    id: s.string(),
    price: s.string(),
    quantity: s.float64(),
  },
  { additionalProperties: s.json() },
);
