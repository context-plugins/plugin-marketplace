import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional list of stats for a subscription. Retrievable by including `expand: [stats]` in the
 * request body.
 */
export type SubscriptionStats = {
  /** The total number of emails that have been sent to this subscriber */
  emailsReceived?: number;
  /** The percentage of emails that the subscriber has opened */
  openRate?: number;
  /** The percentage of emails that the subscriber has clicked a link in */
  clickThroughRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionStatsSchema: Schema<SubscriptionStats> = s.object<SubscriptionStats>(
  {
    emailsReceived: s.optional(s.int()),
    openRate: s.optional(s.float64()),
    clickThroughRate: s.optional(s.float64()),
    _keysMap: {
      emailsReceived: "emails_received",
      openRate: "open_rate",
      clickThroughRate: "click_through_rate",
    },
  },
  { additionalProperties: s.json() },
);
