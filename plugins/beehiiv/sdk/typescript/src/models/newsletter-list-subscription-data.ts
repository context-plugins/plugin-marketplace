import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newsletterListSubscriptionStatusSchema,
  type NewsletterListSubscriptionStatus,
} from "./newsletter-list-subscription-status.js";

export type NewsletterListSubscriptionData = {
  /** The prefixed ID of the newsletter list subscription. */
  id: string;
  /** The name of the newsletter list. */
  listName: string;
  /** The prefixed ID of the subscription. */
  subscriptionId: string;
  /** The email address of the subscriber. */
  email: string;
  /** The status of the newsletter list subscription. */
  status: NewsletterListSubscriptionStatus;
  /** The time the subscriber was added to the list. Measured in seconds since the Unix epoch. */
  subscribedAt?: number;
  /**
   * The time the subscriber was removed from the list. Measured in seconds since the Unix epoch.
   */
  unsubscribedAt?: number;
  /**
   * The time the newsletter list subscription was created. Measured in seconds since the Unix
   * epoch.
   */
  created: number;
  /**
   * The time the newsletter list subscription was last updated. Measured in seconds since the Unix
   * epoch.
   */
  updated: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsletterListSubscriptionDataSchema: Schema<NewsletterListSubscriptionData> =
  s.object<NewsletterListSubscriptionData>(
    {
      id: s.string(),
      listName: s.string(),
      subscriptionId: s.string(),
      email: s.string(),
      status: newsletterListSubscriptionStatusSchema,
      subscribedAt: s.optional(s.int()),
      unsubscribedAt: s.optional(s.int()),
      created: s.int(),
      updated: s.int(),
      _keysMap: {
        listName: "list_name",
        subscriptionId: "subscription_id",
        subscribedAt: "subscribed_at",
        unsubscribedAt: "unsubscribed_at",
      },
    },
    { additionalProperties: s.json() },
  );
