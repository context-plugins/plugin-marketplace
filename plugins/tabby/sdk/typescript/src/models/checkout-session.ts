import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkoutResponsePaymentInternalSchema,
  checkoutResponsePaymentSchema,
  type CheckoutResponsePayment,
} from "./checkout-response-payment.js";
import { configurationInternalSchema, configurationSchema, type Configuration } from "./configuration.js";
import { merchantUrls2InternalSchema, merchantUrls2Schema, type MerchantUrls2 } from "./merchant-urls2.js";
import { statusSchema, type Status } from "./status.js";

export type CheckoutSession = {
  /** Unique identifier for the checkout Session, assigned by Tabby. */
  id?: string;
  /** Some details associated with the current session. */
  configuration?: Configuration;
  /**
   * In the response, this field will be filled with `token` value if session status is 'approved'.
   * You can use that token for Tokenized Payments and Web Checkout.
   */
  token?: string | null;
  /** Payment object associated with the current session. */
  payment?: CheckoutResponsePayment;
  /**
   * Status of the current session. Used at the pre-scoring and session creation steps.
   *   - `created` is returned when the request is approved and the customer is eligible to use
   *     Tabby
   *   - `rejected` means that there are no available products for a customer
   *   - `expired` and `approved` - used for specific type of integration, kindly ignore them if not
   *     communicated directly
   */
  status?: Status;
  merchantUrls?: MerchantUrls2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const checkoutSessionProperties: s.Shape<CheckoutSession> = {
  id: s.optional(s.string()),
  configuration: s.optional(s.lazy(() => configurationInternalSchema)),
  token: s.optionalNullable(s.string()),
  payment: s.optional(s.lazy(() => checkoutResponsePaymentInternalSchema)),
  status: s.optional(s.lazy(() => statusSchema)),
  merchantUrls: s.optional(s.lazy(() => merchantUrls2InternalSchema)),
  _keysMap: {
    merchantUrls: "merchant_urls",
  },
};

export const checkoutSessionInternalSchema: Schema<CheckoutSession> = s.object<CheckoutSession>(
  checkoutSessionProperties,
  { additionalProperties: s.json() },
);

export const checkoutSessionSchema: Schema<CheckoutSession> = s.lazySchema(() =>
  s.object<CheckoutSession>(
    {
      ...checkoutSessionProperties,
      configuration: s.optional(s.lazy(() => configurationSchema)),
      payment: s.optional(s.lazy(() => checkoutResponsePaymentSchema)),
      merchantUrls: s.optional(s.lazy(() => merchantUrls2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
