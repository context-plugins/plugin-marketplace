import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Used for redirecting the customer after Tabby Checkout flow. Required for Web integration,
 * optional for Mobile App integration.
 */
export type MerchantUrls = {
  /**
   * URL to redirect the customer to merchant's 'Thank you' page after success payment. Payment
   * status = `AUTHORIZED` or `CLOSED`.
   */
  success?: string;
  /**
   * URL to redirect the customer back to merchant's Checkout page after payment cancellation by
   * customer. Payment status = `EXPIRED`.
   */
  cancel?: string;
  /**
   * URL to redirect the customer back to merchant's Checkout page after payment rejection by Tabby.
   * Payment status = `REJECTED`.
   */
  failure?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const merchantUrlsProperties: s.Shape<MerchantUrls> = {
  success: s.optional(s.string()),
  cancel: s.optional(s.string()),
  failure: s.optional(s.string()),
};

export const merchantUrlsInternalSchema: Schema<MerchantUrls> = s.object<MerchantUrls>(
  merchantUrlsProperties,
  { additionalProperties: s.json() },
);

export const merchantUrlsSchema: Schema<MerchantUrls> = s.lazySchema(() =>
  s.object<MerchantUrls>(
    {
      ...merchantUrlsProperties,
      success: s.optional(s.string().check(s.url())),
      cancel: s.optional(s.string().check(s.url())),
      failure: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
