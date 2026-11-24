import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subscriptionsPatchRequestSubscriptionsItemCustomFieldsItemSchema,
  type SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem,
} from "./subscriptions-patch-request-subscriptions-item-custom-fields-item.js";
import {
  subscriptionsPatchRequestSubscriptionsItemTier1Schema,
  type SubscriptionsPatchRequestSubscriptionsItemTier1,
} from "./subscriptions-patch-request-subscriptions-item-tier1.js";

export type PublicationsSubscriptionsRequest1 = {
  /** The new email address for the subscription */
  email?: string;
  /** Optional parameter to set the tier for this subscription. */
  tier?: SubscriptionsPatchRequestSubscriptionsItemTier1;
  /**
   * An array of premium tier IDs to assign to this subscription. When provided, the subscription
   * will be assigned to these specific premium tiers. Can be combined with `premium_tiers` to
   * include tiers from both (duplicates are removed). Takes precedence over the `tier` parameter.
   */
  premiumTierIds?: string[];
  /**
   * An array of premium tier names to assign to this subscription. When provided, the subscription
   * will be assigned to premium tiers matching these names. Can be combined with `premium_tier_ids`
   * to include tiers from both (duplicates are removed). Takes precedence over the `tier`
   * parameter.
   */
  premiumTiers?: string[];
  /** The Stripe Customer ID of the subscription (not required) */
  stripeCustomerId?: string;
  /**
   * A boolean value specifying whether to unsubscribe this subscription from the publication (not
   * required)
   */
  unsubscribe?: boolean;
  /** An array of custom field objects to update */
  customFields?: SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem[];
  /**
   * The prefixed ID of a complimentary access object to apply to this subscription. The
   * complimentary access must belong to the same publication.
   */
  complimentaryGiftId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsSubscriptionsRequest1Schema: Schema<PublicationsSubscriptionsRequest1> =
  s.object<PublicationsSubscriptionsRequest1>(
    {
      email: s.optional(s.string()),
      tier: s.optional(s.lazy(() => subscriptionsPatchRequestSubscriptionsItemTier1Schema)),
      premiumTierIds: s.optional(s.array(s.string())),
      premiumTiers: s.optional(s.array(s.string())),
      stripeCustomerId: s.optional(s.string()),
      unsubscribe: s.optional(s.boolean()),
      customFields: s.optional(
        s.array(s.lazy(() => subscriptionsPatchRequestSubscriptionsItemCustomFieldsItemSchema)),
      ),
      complimentaryGiftId: s.optional(s.string()),
      _keysMap: {
        premiumTierIds: "premium_tier_ids",
        premiumTiers: "premium_tiers",
        stripeCustomerId: "stripe_customer_id",
        customFields: "custom_fields",
        complimentaryGiftId: "complimentary_gift_id",
      },
    },
    { additionalProperties: s.json() },
  );
