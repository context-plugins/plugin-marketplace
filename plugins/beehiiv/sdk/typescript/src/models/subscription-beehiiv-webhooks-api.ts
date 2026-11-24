import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subscriptionDataSchema, type SubscriptionData } from "./subscription-data.js";

export type SubscriptionBeehiivWebhooksApi = {
  /** The prefixed event ID, unique to each webhook event. */
  uid?: string;
  /** The date the event was created. Measured in seconds since the Unix epoch. */
  eventTimestamp?: number;
  /** The event type. */
  eventType?: string;
  data?: SubscriptionData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionBeehiivWebhooksApiSchema: Schema<SubscriptionBeehiivWebhooksApi> =
  s.object<SubscriptionBeehiivWebhooksApi>(
    {
      uid: s.optional(s.string()),
      eventTimestamp: s.optional(s.int()),
      eventType: s.optional(s.string()),
      data: s.optional(s.lazy(() => subscriptionDataSchema)),
      _keysMap: {
        eventTimestamp: "event_timestamp",
        eventType: "event_type",
      },
    },
    { additionalProperties: s.json() },
  );
