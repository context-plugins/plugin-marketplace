import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subscriptionInternalSchema, subscriptionSchema, type Subscription } from "./subscription.js";

/** The response containing subscription data */
export type SubscriptionResponse = {
  /** The subscription object */
  data: Subscription;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionResponseProperties: s.Shape<SubscriptionResponse> = {
  data: subscriptionInternalSchema,
};

export const subscriptionResponseInternalSchema: Schema<SubscriptionResponse> =
  s.object<SubscriptionResponse>(subscriptionResponseProperties, { additionalProperties: s.json() });

export const subscriptionResponseSchema: Schema<SubscriptionResponse> = s.lazySchema(() =>
  s.object<SubscriptionResponse>(
    {
      ...subscriptionResponseProperties,
      data: subscriptionSchema,
    },
    { additionalProperties: s.json() },
  ),
);
