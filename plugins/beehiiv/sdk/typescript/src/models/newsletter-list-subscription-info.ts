import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newsletterListSubscriptionStatusSchema,
  type NewsletterListSubscriptionStatus,
} from "./newsletter-list-subscription-status.js";

export type NewsletterListSubscriptionInfo = {
  /** The prefixed ID of the newsletter list subscription. */
  id: string;
  /** The prefixed ID of the newsletter list. */
  newsletterListId: string;
  /** The prefixed ID of the subscription. */
  subscriptionId: string;
  /** The status of the newsletter list subscription. */
  status: NewsletterListSubscriptionStatus;
  /** The time the subscription was activated. Measured in seconds since the Unix epoch. */
  subscribedAt?: number;
  /** The time the subscription was deactivated. Measured in seconds since the Unix epoch. */
  unsubscribedAt?: number;
  /**
   * The time the newsletter list subscription was created. Measured in seconds since the Unix
   * epoch.
   */
  createdAt: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsletterListSubscriptionInfoSchema: Schema<NewsletterListSubscriptionInfo> =
  s.object<NewsletterListSubscriptionInfo>(
    {
      id: s.string(),
      newsletterListId: s.string(),
      subscriptionId: s.string(),
      status: newsletterListSubscriptionStatusSchema,
      subscribedAt: s.optional(s.int()),
      unsubscribedAt: s.optional(s.int()),
      createdAt: s.int(),
      _keysMap: {
        newsletterListId: "newsletter_list_id",
        subscriptionId: "subscription_id",
        subscribedAt: "subscribed_at",
        unsubscribedAt: "unsubscribed_at",
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
