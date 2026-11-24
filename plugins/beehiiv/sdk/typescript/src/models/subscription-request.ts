import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldValueSchema, type CustomFieldValue } from "./custom-field-value.js";
import {
  subscriptionsCreateRequestTierSchema,
  type SubscriptionsCreateRequestTier,
} from "./subscriptions-create-request-tier.js";

export type SubscriptionRequest = {
  /** The email address of the subscription. */
  email: string;
  /**
   * Whether or not to reactivate the subscription if they have already unsubscribed. This option
   * should be used only if the subscriber is knowingly resubscribing.
   *
   * @default false
   */
  reactivateExisting?: boolean;
  /** @default false */
  sendWelcomeEmail?: boolean;
  /** The source of the subscription. */
  utmSource?: string;
  /** The medium of the subscription */
  utmMedium?: string;
  /** The acquisition campaign of the subscription */
  utmCampaign?: string;
  /** The acquisition term; typically the keyword or search term */
  utmTerm?: string;
  /** The acquisition content; typically used for A/B testing or ad variations */
  utmContent?: string;
  /** The website that the subscriber was referred from */
  referringSite?: string;
  /**
   * This should be a subscribers referral_code. This gives referral credit for the new
   * subscription.
   */
  referralCode?: string;
  /**
   * The custom fields must already exist for the publication. Any new custom fields here will be
   * discarded.
   */
  customFields?: CustomFieldValue[];
  /**
   * Override the publication's default double opt-in settings for this subscription. Possible
   * values are:
   * - "on" — The subscriber will receive a double opt-in confirmation email and will need to
   *   confirm their subscription prior to being marked as active.
   * - "off" — The subscriber will be marked as active immediately and will not receive a double
   *   opt-in confirmation email.
   * - "not_set" — The publication's default double opt-in settings will be applied to this
   *   subscription.
   */
  doubleOptOverride?: string;
  /** The tier for this subscription. */
  tier?: SubscriptionsCreateRequestTier;
  /**
   * An array of premium tier names to assign to this subscription. When provided, the subscription
   * will be assigned to premium tiers matching these names. Can be combined with `premium_tier_ids`
   * to include tiers from both (duplicates are removed). Takes precedence over the `tier`
   * parameter.
   */
  premiumTiers?: string[];
  /**
   * An array of premium tier IDs to assign to this subscription. When provided, the subscription
   * will be assigned to these specific premium tiers. Can be combined with `premium_tiers` to
   * include tiers from both (duplicates are removed). Takes precedence over the `tier` parameter.
   */
  premiumTierIds?: string[];
  /** The Stripe customer ID for this subscription. */
  stripeCustomerId?: string;
  /**
   * Enroll the subscriber into automations after their subscription has been created. Requires the
   * automations to have an active *Add by API* trigger.
   */
  automationIds?: string[];
  /**
   * An array of newsletter list prefixed IDs to subscribe the new subscription to. The newsletter
   * lists must belong to the same publication.
   */
  newsletterListIds?: string[];
  /**
   * When true, the subscriber will not be auto-subscribed to newsletter lists configured with
   * auto-subscribe. Defaults to false.
   */
  skipNewsletterListAutoSubscribe?: boolean;
  /**
   * The prefixed ID of a complimentary access object to apply to this subscription. The
   * complimentary access must belong to the same publication.
   */
  complimentaryGiftId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionRequestSchema: Schema<SubscriptionRequest> = s.object<SubscriptionRequest>(
  {
    email: s.string(),
    reactivateExisting: s.defaulted(s.boolean(), false),
    sendWelcomeEmail: s.defaulted(s.boolean(), false),
    utmSource: s.optional(s.string()),
    utmMedium: s.optional(s.string()),
    utmCampaign: s.optional(s.string()),
    utmTerm: s.optional(s.string()),
    utmContent: s.optional(s.string()),
    referringSite: s.optional(s.string()),
    referralCode: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => customFieldValueSchema))),
    doubleOptOverride: s.optional(s.string()),
    tier: s.optional(s.lazy(() => subscriptionsCreateRequestTierSchema)),
    premiumTiers: s.optional(s.array(s.string())),
    premiumTierIds: s.optional(s.array(s.string())),
    stripeCustomerId: s.optional(s.string()),
    automationIds: s.optional(s.array(s.string())),
    newsletterListIds: s.optional(s.array(s.string())),
    skipNewsletterListAutoSubscribe: s.optional(s.boolean()),
    complimentaryGiftId: s.optional(s.string()),
    _keysMap: {
      reactivateExisting: "reactivate_existing",
      sendWelcomeEmail: "send_welcome_email",
      utmSource: "utm_source",
      utmMedium: "utm_medium",
      utmCampaign: "utm_campaign",
      utmTerm: "utm_term",
      utmContent: "utm_content",
      referringSite: "referring_site",
      referralCode: "referral_code",
      customFields: "custom_fields",
      doubleOptOverride: "double_opt_override",
      premiumTiers: "premium_tiers",
      premiumTierIds: "premium_tier_ids",
      stripeCustomerId: "stripe_customer_id",
      automationIds: "automation_ids",
      newsletterListIds: "newsletter_list_ids",
      skipNewsletterListAutoSubscribe: "skip_newsletter_list_auto_subscribe",
      complimentaryGiftId: "complimentary_gift_id",
    },
  },
  { additionalProperties: s.json() },
);
