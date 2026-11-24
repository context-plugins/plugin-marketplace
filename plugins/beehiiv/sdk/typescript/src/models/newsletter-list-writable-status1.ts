import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the newsletter list. Valid values are `active` and `archived`. Setting `draft` is
 * not permitted.
 */
export const NewsletterListWritableStatus1 = {
  Active: "active",
  Archived: "archived",
} as const;
export type NewsletterListWritableStatus1 =
  | (typeof NewsletterListWritableStatus1)[keyof typeof NewsletterListWritableStatus1]
  | (string & {});

export const newsletterListWritableStatus1Schema: EnumSchema<NewsletterListWritableStatus1> =
  s.enumOf<NewsletterListWritableStatus1>(NewsletterListWritableStatus1);
