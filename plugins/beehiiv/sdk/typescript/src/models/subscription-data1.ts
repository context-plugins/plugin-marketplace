import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customFieldValueBeehiivWebhooksApiSchema,
  type CustomFieldValueBeehiivWebhooksApi,
} from "./custom-field-value-beehiiv-webhooks-api.js";
import { subscriptionDataStatusSchema, type SubscriptionDataStatus } from "./subscription-data-status.js";

/** The subscription associated with the private feed token. */
export type SubscriptionData1 = {
  /** The time the subscription was created. Measured in seconds since the Unix epoch. */
  created?: number;
  /** The email address of the subscription. */
  email?: string;
  /** The prefixed ID of the subscription. */
  id?: string;
  /**
   * The code associated to this subscriber to refer others. When a new subscription is created with
   * this referral code, credit for the referral goes to this subscription.
   */
  referralCode?: string;
  /** The website that the subscriber was referred from. */
  referringSite?: string;
  /** The status of the subscription. */
  status?: SubscriptionDataStatus;
  /** The tier of the subscription. */
  subscriptionTier?: string;
  /** The names of the premium tiers associated with the subscription. */
  subscriptionPremiumTierNames?: string[];
  /** The Stripe customer ID associated with the subscription. */
  stripeCustomerId?: string;
  /** The acquisition campaign that the subscriber was acquired from. */
  utmCampaign?: string;
  /** The channel that the subscriber was acquired from. */
  utmChannel?: string;
  /** The medium that the subscriber was acquired from. */
  utmMedium?: string;
  /** The source that the subscriber was acquired from. */
  utmSource?: string;
  /**
   * An array of custom field values that have been set on the subscription. Each custom field value
   * includes the field name, kind (type), and formatted value.
   */
  customFields?: CustomFieldValueBeehiivWebhooksApi[];
  /** An array of tag names that have been applied to the subscription. */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionData1Schema: Schema<SubscriptionData1> = s.object<SubscriptionData1>(
  {
    created: s.optional(s.int()),
    email: s.optional(s.string()),
    id: s.optional(s.string()),
    referralCode: s.optional(s.string()),
    referringSite: s.optional(s.string()),
    status: s.optional(s.lazy(() => subscriptionDataStatusSchema)),
    subscriptionTier: s.optional(s.string()),
    subscriptionPremiumTierNames: s.optional(s.array(s.string())),
    stripeCustomerId: s.optional(s.string()),
    utmCampaign: s.optional(s.string()),
    utmChannel: s.optional(s.string()),
    utmMedium: s.optional(s.string()),
    utmSource: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => customFieldValueBeehiivWebhooksApiSchema))),
    tags: s.optional(s.array(s.string())),
    _keysMap: {
      referralCode: "referral_code",
      referringSite: "referring_site",
      subscriptionTier: "subscription_tier",
      subscriptionPremiumTierNames: "subscription_premium_tier_names",
      stripeCustomerId: "stripe_customer_id",
      utmCampaign: "utm_campaign",
      utmChannel: "utm_channel",
      utmMedium: "utm_medium",
      utmSource: "utm_source",
      customFields: "custom_fields",
    },
  },
  { additionalProperties: s.json() },
);
