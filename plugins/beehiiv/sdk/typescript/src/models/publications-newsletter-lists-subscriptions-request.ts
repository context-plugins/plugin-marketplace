import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsNewsletterListsSubscriptionsRequest = {
  /**
   * The prefixed ID of the subscription to subscribe. Either subscription_id or email must be
   * provided.
   */
  subscriptionId?: string;
  /**
   * The email address of the subscription to subscribe. Either subscription_id or email must be
   * provided.
   */
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsNewsletterListsSubscriptionsRequestSchema: Schema<PublicationsNewsletterListsSubscriptionsRequest> =
  s.object<PublicationsNewsletterListsSubscriptionsRequest>(
    {
      subscriptionId: s.optional(s.string()),
      email: s.optional(s.string()),
      _keysMap: {
        subscriptionId: "subscription_id",
      },
    },
    { additionalProperties: s.json() },
  );
