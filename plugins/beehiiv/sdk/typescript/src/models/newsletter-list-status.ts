import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the newsletter list. */
export const NewsletterListStatus = {
  Draft: "draft",
  Active: "active",
  Archived: "archived",
} as const;
export type NewsletterListStatus =
  | (typeof NewsletterListStatus)[keyof typeof NewsletterListStatus]
  | (string & {});

export const newsletterListStatusSchema: EnumSchema<NewsletterListStatus> =
  s.enumOf<NewsletterListStatus>(NewsletterListStatus);
