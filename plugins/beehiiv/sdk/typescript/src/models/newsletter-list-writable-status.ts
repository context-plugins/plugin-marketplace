import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Valid status values when updating a newsletter list. draft is not permitted. */
export const NewsletterListWritableStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type NewsletterListWritableStatus =
  | (typeof NewsletterListWritableStatus)[keyof typeof NewsletterListWritableStatus]
  | (string & {});

export const newsletterListWritableStatusSchema: EnumSchema<NewsletterListWritableStatus> =
  s.enumOf<NewsletterListWritableStatus>(NewsletterListWritableStatus);
