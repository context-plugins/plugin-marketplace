import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionsListRequestExpandItem = {
  Stats: "stats",
  CustomFields: "custom_fields",
  Referrals: "referrals",
  NewsletterLists: "newsletter_lists",
} as const;
export type SubscriptionsListRequestExpandItem =
  | (typeof SubscriptionsListRequestExpandItem)[keyof typeof SubscriptionsListRequestExpandItem]
  | (string & {});

export const subscriptionsListRequestExpandItemSchema: EnumSchema<SubscriptionsListRequestExpandItem> =
  s.enumOf<SubscriptionsListRequestExpandItem>(SubscriptionsListRequestExpandItem);
