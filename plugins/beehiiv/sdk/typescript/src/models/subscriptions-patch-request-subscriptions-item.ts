import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subscriptionsPatchRequestSubscriptionsItemCustomFieldsItemSchema,
  type SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem,
} from "./subscriptions-patch-request-subscriptions-item-custom-fields-item.js";
import {
  subscriptionsPatchRequestSubscriptionsItemTierSchema,
  type SubscriptionsPatchRequestSubscriptionsItemTier,
} from "./subscriptions-patch-request-subscriptions-item-tier.js";

export type SubscriptionsPatchRequestSubscriptionsItem = {
  /** The prefixed ID of the subscription. */
  subscriptionId: string;
  /** The Tier of the Subscription (not required) */
  tier?: SubscriptionsPatchRequestSubscriptionsItemTier;
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

export const subscriptionsPatchRequestSubscriptionsItemSchema: Schema<SubscriptionsPatchRequestSubscriptionsItem> =
  s.object<SubscriptionsPatchRequestSubscriptionsItem>(
    {
      subscriptionId: s.string(),
      tier: s.optional(s.lazy(() => subscriptionsPatchRequestSubscriptionsItemTierSchema)),
      stripeCustomerId: s.optional(s.string()),
      unsubscribe: s.optional(s.boolean()),
      customFields: s.optional(
        s.array(s.lazy(() => subscriptionsPatchRequestSubscriptionsItemCustomFieldsItemSchema)),
      ),
      complimentaryGiftId: s.optional(s.string()),
      _keysMap: {
        subscriptionId: "subscription_id",
        stripeCustomerId: "stripe_customer_id",
        customFields: "custom_fields",
        complimentaryGiftId: "complimentary_gift_id",
      },
    },
    { additionalProperties: s.json() },
  );
