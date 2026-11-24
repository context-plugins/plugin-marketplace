import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subscriptionInternalSchema, subscriptionSchema, type Subscription } from "./subscription.js";

export type SubscriptionTagsCreateResponse = {
  /** The subscription object */
  data?: Subscription;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionTagsCreateResponseProperties: s.Shape<SubscriptionTagsCreateResponse> = {
  data: s.optional(s.lazy(() => subscriptionInternalSchema)),
};

export const subscriptionTagsCreateResponseInternalSchema: Schema<SubscriptionTagsCreateResponse> =
  s.object<SubscriptionTagsCreateResponse>(subscriptionTagsCreateResponseProperties, {
    additionalProperties: s.json(),
  });

export const subscriptionTagsCreateResponseSchema: Schema<SubscriptionTagsCreateResponse> = s.lazySchema(() =>
  s.object<SubscriptionTagsCreateResponse>(
    {
      ...subscriptionTagsCreateResponseProperties,
      data: s.optional(s.lazy(() => subscriptionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
