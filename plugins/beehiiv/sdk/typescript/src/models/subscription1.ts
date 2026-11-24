import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldSchema, type CustomField } from "./custom-field.js";
import {
  subscriptionExpandedStatus1Schema,
  type SubscriptionExpandedStatus1,
} from "./subscription-expanded-status1.js";
import {
  subscriptionExpandedSubscriptionTierSchema,
  type SubscriptionExpandedSubscriptionTier,
} from "./subscription-expanded-subscription-tier.js";
import {
  subscriptionExpandedUtmChannelSchema,
  type SubscriptionExpandedUtmChannel,
} from "./subscription-expanded-utm-channel.js";
import { subscriptionStatsSchema, type SubscriptionStats } from "./subscription-stats.js";
import { subscriptionTierInfoSchema, type SubscriptionTierInfo } from "./subscription-tier-info.js";

/**
 * The Subscription object matching the email address for this publication. Only present when
 * `expand` includes `subscription` or `subscription_custom_fields`.
 */
export type Subscription1 = {
  /** The prefixed subscription id */
  id: string;
  email: string;
  /**
   * The status of the subscription.<br>`validating` - The email address is being
   * validated.<br>`invalid` - The email address is invalid.<br>`pending` - The email address is
   * valid, but the subscription is pending double opt-in.<br>`active` - The email was valid and the
   * subscription is active.<br>`inactive` - The subscription was made inactive, possibly due to an
   * unsubscribe.<br>`needs_attention` - The subscription requires approval or denial.
   */
  status: SubscriptionExpandedStatus1;
  /** The date the subscription was created. Measured in seconds since the Unix epoch */
  created: number;
  /** The current tier of the subscription. */
  subscriptionTier: SubscriptionExpandedSubscriptionTier;
  /**
   * The current premium tiers of the subscription. Empty if the subscriber is not associated with
   * any premium tiers.
   */
  subscriptionPremiumTierNames: string[];
  /** The acquisition source; where the subscriber came from */
  utmSource: string;
  /** The acquisition medium; how the subscriber got to your publication */
  utmMedium: string;
  /** The acquisition channel */
  utmChannel: SubscriptionExpandedUtmChannel;
  /** The acquisition campaign */
  utmCampaign: string;
  /** The acquisition term; typically the keyword or search term */
  utmTerm: string;
  /** The acquisition content; typically used for A/B testing or ad variations */
  utmContent: string;
  /** The website that the subscriber was referred from */
  referringSite: string;
  /**
   * The code associated to this subscriber to refer others. When a new subscription is created with
   * this referral code, credit for the referral goes to this subscription.
   */
  referralCode: string;
  /**
   * Optional list of tiers for a subscription. Retrievable by including `expand:
   * [subscription_premium_tiers]` in the request body.
   */
  subscriptionPremiumTiers?: SubscriptionTierInfo[];
  /**
   * Optional list of custom fields for a subscription. Retrievable by including `expand:
   * [custom_field]` in the request body.
   */
  customFields?: CustomField[];
  /**
   * Optional list of tags for a subscription. Retrievable by including `expand: [tags]` in the
   * request body. Max limit of 100 unique tags per publication.
   */
  tags?: string[];
  /**
   * Optional list of stats for a subscription. Retrievable by including `expand: [stats]` in the
   * request body.
   */
  stats?: SubscriptionStats;
  /**
   * The prefixed IDs of the newsletter lists this subscription is actively subscribed to. Requires
   * `expand[]=newsletter_lists`.
   */
  newsletterListIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscription1Properties: s.Shape<Subscription1> = {
  id: s.string(),
  email: s.string(),
  status: subscriptionExpandedStatus1Schema,
  created: s.int(),
  subscriptionTier: subscriptionExpandedSubscriptionTierSchema,
  subscriptionPremiumTierNames: s.array(s.string()),
  utmSource: s.string(),
  utmMedium: s.string(),
  utmChannel: subscriptionExpandedUtmChannelSchema,
  utmCampaign: s.string(),
  utmTerm: s.string(),
  utmContent: s.string(),
  referringSite: s.string(),
  referralCode: s.string(),
  subscriptionPremiumTiers: s.optional(s.array(s.lazy(() => subscriptionTierInfoSchema))),
  customFields: s.optional(s.array(s.lazy(() => customFieldSchema))),
  tags: s.optional(s.array(s.string())),
  stats: s.optional(s.lazy(() => subscriptionStatsSchema)),
  newsletterListIds: s.optional(s.array(s.string())),
  _keysMap: {
    subscriptionTier: "subscription_tier",
    subscriptionPremiumTierNames: "subscription_premium_tier_names",
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmChannel: "utm_channel",
    utmCampaign: "utm_campaign",
    utmTerm: "utm_term",
    utmContent: "utm_content",
    referringSite: "referring_site",
    referralCode: "referral_code",
    subscriptionPremiumTiers: "subscription_premium_tiers",
    customFields: "custom_fields",
    newsletterListIds: "newsletter_list_ids",
  },
};

export const subscription1InternalSchema: Schema<Subscription1> = s.object<Subscription1>(
  subscription1Properties,
  { additionalProperties: s.json() },
);

export const subscription1Schema: Schema<Subscription1> = s.lazySchema(() =>
  s.object<Subscription1>(
    {
      ...subscription1Properties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
