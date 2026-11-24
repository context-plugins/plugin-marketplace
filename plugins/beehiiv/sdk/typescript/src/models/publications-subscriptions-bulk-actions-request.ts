import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subscriptionsPatchRequestSubscriptionsItemSchema,
  type SubscriptionsPatchRequestSubscriptionsItem,
} from "./subscriptions-patch-request-subscriptions-item.js";

export type PublicationsSubscriptionsBulkActionsRequest = {
  /** An array of objects representing the subscriptions to be updated (max 1000). */
  subscriptions?: SubscriptionsPatchRequestSubscriptionsItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsSubscriptionsBulkActionsRequestSchema: Schema<PublicationsSubscriptionsBulkActionsRequest> =
  s.object<PublicationsSubscriptionsBulkActionsRequest>(
    {
      subscriptions: s.optional(s.array(s.lazy(() => subscriptionsPatchRequestSubscriptionsItemSchema))),
    },
    { additionalProperties: s.json() },
  );
