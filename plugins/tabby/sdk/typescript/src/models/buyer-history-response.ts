import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Customer information. `registered_since` (as a date of the customer's registration in the App),
 * `loyalty_level` (as a number of successful orders) and `wishlist_count` (paid amount by a
 * customer previously, e.g. 500) must be sent for Monthly Billing. `is_social_networks_connected`
 * is also required for Monthly Billing.
 */
export type BuyerHistoryResponse = {
  /**
   * Date and time the customer got registred with you, in UTC, and displayed in ISO 8601 datetime
   * format.
   */
  registeredSince: Date;
  /**
   * Customer's loyalty level within your store, should be sent as a number of successfully placed
   * orders in the store with any payment methods.
   *
   * @default 0
   */
  loyaltyLevel?: number;
  /** Number of items in Customer's wishlist. @default 0 */
  wishlistCount?: number;
  /** Is social network connected */
  isSocialNetworksConnected?: boolean | null;
  /** Is phone number verified */
  isPhoneNumberVerified?: boolean | null;
  /** Is email verified */
  isEmailVerified?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buyerHistoryResponseProperties: s.Shape<BuyerHistoryResponse> = {
  registeredSince: s.dateTime(),
  loyaltyLevel: s.defaulted(s.float64(), 0),
  wishlistCount: s.defaulted(s.float64(), 0),
  isSocialNetworksConnected: s.optionalNullable(s.boolean()),
  isPhoneNumberVerified: s.optionalNullable(s.boolean()),
  isEmailVerified: s.optionalNullable(s.boolean()),
  _keysMap: {
    registeredSince: "registered_since",
    loyaltyLevel: "loyalty_level",
    wishlistCount: "wishlist_count",
    isSocialNetworksConnected: "is_social_networks_connected",
    isPhoneNumberVerified: "is_phone_number_verified",
    isEmailVerified: "is_email_verified",
  },
};

export const buyerHistoryResponseInternalSchema: Schema<BuyerHistoryResponse> =
  s.object<BuyerHistoryResponse>(buyerHistoryResponseProperties, { additionalProperties: s.json() });

export const buyerHistoryResponseSchema: Schema<BuyerHistoryResponse> = s.lazySchema(() =>
  s.object<BuyerHistoryResponse>(
    {
      ...buyerHistoryResponseProperties,
      wishlistCount: s.defaulted(s.float64().check(s.gte(0)), 0),
    },
    { additionalProperties: s.json() },
  ),
);
