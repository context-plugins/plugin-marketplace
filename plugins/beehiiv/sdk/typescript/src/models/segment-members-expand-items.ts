import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SegmentMembersExpandItems = {
  Stats: "stats",
  CustomFields: "custom_fields",
  Referrals: "referrals",
  Tags: "tags",
  SubscriptionPremiumTiers: "subscription_premium_tiers",
} as const;
export type SegmentMembersExpandItems =
  | (typeof SegmentMembersExpandItems)[keyof typeof SegmentMembersExpandItems]
  | (string & {});

export const segmentMembersExpandItemsSchema: EnumSchema<SegmentMembersExpandItems> =
  s.enumOf<SegmentMembersExpandItems>(SegmentMembersExpandItems);
