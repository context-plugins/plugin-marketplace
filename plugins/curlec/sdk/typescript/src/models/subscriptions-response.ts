import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";
import { subscriptionInternalSchema, subscriptionSchema, type Subscription } from "./subscription.js";

export type SubscriptionsResponse = {
  entity?: Entity1RazorpayDisputesApi;
  /** Number of items in the current page. */
  count?: number;
  items?: Subscription[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionsResponseProperties: s.Shape<SubscriptionsResponse> = {
  entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => subscriptionInternalSchema))),
};

export const subscriptionsResponseInternalSchema: Schema<SubscriptionsResponse> =
  s.object<SubscriptionsResponse>(subscriptionsResponseProperties, { additionalProperties: s.json() });

export const subscriptionsResponseSchema: Schema<SubscriptionsResponse> = s.lazySchema(() =>
  s.object<SubscriptionsResponse>(
    {
      ...subscriptionsResponseProperties,
      items: s.optional(s.array(s.lazy(() => subscriptionSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
