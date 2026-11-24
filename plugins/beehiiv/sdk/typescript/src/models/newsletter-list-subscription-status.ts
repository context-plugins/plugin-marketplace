import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the newsletter list subscription. */
export const NewsletterListSubscriptionStatus = {
  Pending: "pending",
  Active: "active",
  Inactive: "inactive",
  Paused: "paused",
} as const;
export type NewsletterListSubscriptionStatus =
  | (typeof NewsletterListSubscriptionStatus)[keyof typeof NewsletterListSubscriptionStatus]
  | (string & {});

export const newsletterListSubscriptionStatusSchema: EnumSchema<NewsletterListSubscriptionStatus> =
  s.enumOf<NewsletterListSubscriptionStatus>(NewsletterListSubscriptionStatus);
