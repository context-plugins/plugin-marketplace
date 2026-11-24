import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionsGetRequestExpandItem = {
  Stats: "stats",
  CustomFields: "custom_fields",
  Referrals: "referrals",
  Tags: "tags",
  NewsletterLists: "newsletter_lists",
} as const;
export type SubscriptionsGetRequestExpandItem =
  | (typeof SubscriptionsGetRequestExpandItem)[keyof typeof SubscriptionsGetRequestExpandItem]
  | (string & {});

export const subscriptionsGetRequestExpandItemSchema: EnumSchema<SubscriptionsGetRequestExpandItem> =
  s.enumOf<SubscriptionsGetRequestExpandItem>(SubscriptionsGetRequestExpandItem);
