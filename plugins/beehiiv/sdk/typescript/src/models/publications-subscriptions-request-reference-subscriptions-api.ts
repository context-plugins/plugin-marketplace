import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subscriptionsPutRequestSubscriptionsItemCustomFieldsItemSchema,
  type SubscriptionsPutRequestSubscriptionsItemCustomFieldsItem,
} from "./subscriptions-put-request-subscriptions-item-custom-fields-item.js";
import {
  subscriptionsPutRequestSubscriptionsItemTier1Schema,
  type SubscriptionsPutRequestSubscriptionsItemTier1,
} from "./subscriptions-put-request-subscriptions-item-tier1.js";

export type PublicationsSubscriptionsRequestReferenceSubscriptionsApi = {
  /** Optional parameter to set the tier for this subscription. */
  tier?: SubscriptionsPutRequestSubscriptionsItemTier1;
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
  /** The new email address for the subscription */
  email?: string;
  /** The Stripe Customer ID of the subscription (not required) */
  stripeCustomerId?: string;
  /**
   * A boolean value specifying whether to unsubscribe this subscription from the publication (not
   * required)
   */
  unsubscribe?: boolean;
  /** An array of custom field objects to update */
  customFields?: SubscriptionsPutRequestSubscriptionsItemCustomFieldsItem[];
  /**
   * The prefixed ID of a complimentary access object to apply to this subscription. The
   * complimentary access must belong to the same publication.
   */
  complimentaryGiftId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsSubscriptionsRequestReferenceSubscriptionsApiSchema: Schema<PublicationsSubscriptionsRequestReferenceSubscriptionsApi> =
  s.object<PublicationsSubscriptionsRequestReferenceSubscriptionsApi>(
    {
      tier: s.optional(s.lazy(() => subscriptionsPutRequestSubscriptionsItemTier1Schema)),
      premiumTierIds: s.optional(s.array(s.string())),
      premiumTiers: s.optional(s.array(s.string())),
      email: s.optional(s.string()),
      stripeCustomerId: s.optional(s.string()),
      unsubscribe: s.optional(s.boolean()),
      customFields: s.optional(
        s.array(s.lazy(() => subscriptionsPutRequestSubscriptionsItemCustomFieldsItemSchema)),
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
