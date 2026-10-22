import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The payment method used for this subscription. If omitted, any of the customer's valid mandates
 * may be used.
 */
export const SubscriptionMethodResponse = {
  Creditcard: "creditcard",
  Directdebit: "directdebit",
  Paypal: "paypal",
} as const;
export type SubscriptionMethodResponse =
  | (typeof SubscriptionMethodResponse)[keyof typeof SubscriptionMethodResponse]
  | (string & {});

export const subscriptionMethodResponseSchema: EnumSchema<SubscriptionMethodResponse> =
  s.enumOf<SubscriptionMethodResponse>(SubscriptionMethodResponse);
