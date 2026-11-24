import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkoutCustomCardInputInternalSchema,
  checkoutCustomCardInputSchema,
  type CheckoutCustomCardInput,
} from "./checkout-custom-card-input.js";
import { checkoutProductInputSchema, type CheckoutProductInput } from "./checkout-product-input.js";

export type CreateCheckoutRequest = {
  products: CheckoutProductInput[];
  customerId?: string;
  /**
   * External customer identifier. Creates the customer on first use, resolves to the existing
   * customer on subsequent uses.
   */
  externalCustomerId?: string;
  successUrl: string;
  cancelUrl?: string;
  expiresAt?: Date;
  metadata?: Record<string, unknown>;
  /** @default true */
  collectAddress?: boolean;
  /** @default false */
  collectPhone?: boolean;
  /** @default true */
  singleUse?: boolean;
  /**
   * Lock checkout to a specific currency. Omit to allow all currencies supported by the selected
   * plans. If the checkout is for a customer with an active subscription, the currency must match
   * that subscription's currency — subscriptions cannot change currency.
   */
  currency?: string;
  /** Additional informational pricing cards rendered alongside the plans. */
  customCards?: CheckoutCustomCardInput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCheckoutRequestProperties: s.Shape<CreateCheckoutRequest> = {
  products: s.array(s.lazy(() => checkoutProductInputSchema)),
  customerId: s.optional(s.string()),
  externalCustomerId: s.optional(s.string()),
  successUrl: s.string(),
  cancelUrl: s.optional(s.string()),
  expiresAt: s.optional(s.dateTime()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  collectAddress: s.defaulted(s.boolean(), true),
  collectPhone: s.defaulted(s.boolean(), false),
  singleUse: s.defaulted(s.boolean(), true),
  currency: s.optional(s.string()),
  customCards: s.optional(s.array(s.lazy(() => checkoutCustomCardInputInternalSchema))),
};

export const createCheckoutRequestInternalSchema: Schema<CreateCheckoutRequest> =
  s.object<CreateCheckoutRequest>(createCheckoutRequestProperties, { additionalProperties: s.json() });

export const createCheckoutRequestSchema: Schema<CreateCheckoutRequest> = s.lazySchema(() =>
  s.object<CreateCheckoutRequest>(
    {
      ...createCheckoutRequestProperties,
      successUrl: s.string().check(s.url()),
      cancelUrl: s.optional(s.string().check(s.url())),
      customCards: s.optional(s.array(s.lazy(() => checkoutCustomCardInputSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
