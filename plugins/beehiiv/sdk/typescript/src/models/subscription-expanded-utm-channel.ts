import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The acquisition channel */
export const SubscriptionExpandedUtmChannel = {
  Website: "website",
  Import: "import",
  Embed: "embed",
  Api: "api",
  Referral: "referral",
  Recommendation: "recommendation",
  MagicLink: "magic_link",
  Boost: "boost",
  BoostSend: "boost_send",
  BoostDirectLink: "boost_direct_link",
  Integration: "integration",
  Product: "product",
  GroupInvite: "group_invite",
} as const;
export type SubscriptionExpandedUtmChannel =
  | (typeof SubscriptionExpandedUtmChannel)[keyof typeof SubscriptionExpandedUtmChannel]
  | (string & {});

export const subscriptionExpandedUtmChannelSchema: EnumSchema<SubscriptionExpandedUtmChannel> =
  s.enumOf<SubscriptionExpandedUtmChannel>(SubscriptionExpandedUtmChannel);
