import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subscriptionRequestSchema, type SubscriptionRequest } from "./subscription-request.js";

export type PublicationsBulkSubscriptionsRequest = {
  subscriptions: SubscriptionRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsBulkSubscriptionsRequestSchema: Schema<PublicationsBulkSubscriptionsRequest> =
  s.object<PublicationsBulkSubscriptionsRequest>(
    {
      subscriptions: s.array(s.lazy(() => subscriptionRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
