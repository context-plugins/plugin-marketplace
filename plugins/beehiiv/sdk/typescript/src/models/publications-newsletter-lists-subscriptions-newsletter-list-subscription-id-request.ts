import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest = {
  /** Set to true to unsubscribe the subscription from this newsletter list. */
  unsubscribe?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestSchema: Schema<PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest> =
  s.object<PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest>(
    {
      unsubscribe: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
