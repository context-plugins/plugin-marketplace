import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The payment method used for this subscription. If omitted, any of the customer's valid mandates
 * may be used.
 */
export const SubscriptionMethod = {
  Creditcard: "creditcard",
  Directdebit: "directdebit",
  Paypal: "paypal",
} as const;
export type SubscriptionMethod = (typeof SubscriptionMethod)[keyof typeof SubscriptionMethod] | (string & {});

export const subscriptionMethodSchema: EnumSchema<SubscriptionMethod> =
  s.enumOf<SubscriptionMethod>(SubscriptionMethod);
