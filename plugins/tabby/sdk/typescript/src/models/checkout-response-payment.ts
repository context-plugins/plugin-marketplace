import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentV1Schema, type AttachmentV1 } from "./attachment-v1.js";
import { currencySchema, type Currency } from "./currency.js";
import { metaSchema, type Meta } from "./meta.js";
import { orderResponseInternalSchema, orderResponseSchema, type OrderResponse } from "./order-response.js";
import { paymentStatusSchema, type PaymentStatus } from "./payment-status.js";

/** Payment object associated with the current session. */
export type CheckoutResponsePayment = {
  /** Unique identifier for the payment (UUID), assigned by Tabby. Save it on your side! */
  id?: string;
  /** Date and time the payment was created, in UTC, and displayed in ISO 8601 datetime format. */
  createdAt?: Date;
  /**
   * Status of the current payment:
   * - `CREATED` means that the payment is created successfully, but not finished yet;
   * - `AUTHORIZED` and `CLOSED` mark the successfully approved and captured payments accordingly;
   * - `REJECTED` is returned when a customer is rejected during Tabby Checkout;
   * - `EXPIRED` is used when a customer cancels a payment or when Tabby doesn't receive a
   *   successfully paid transaction after timeout.
   */
  status?: PaymentStatus;
  /**
   * Indicates whether this is a test payment (created using the Test API keys or Production API
   * Keys).
   */
  isTest?: boolean;
  /**
   * Total payment amount, including tax, shipping and any discounts. Allows to send up to 2
   * decimals for AED and SAR, up to 3 decimals for KWD.
   */
  amount: string;
  /**
   * ISO 4217 currency code for the payment amount. Currently there are 3 possible currency options
   * - depending on the country where the store is located:
   *   - `AED` - United Arab Emirates Dirham
   *   - `SAR` - Saudi Riyal
   *   - `KWD` - Kuwaiti Dinar
   */
  currency: Currency;
  description?: string | null;
  order: OrderResponse | null;
  /**
   * Merchant-defined data about the payment. This field is a key-value map. The example properties
   * provided below.
   */
  meta?: Meta | null;
  /** Extra data (booking info, insurance, flight reservations, ...) as serialized JSON */
  attachment?: AttachmentV1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const checkoutResponsePaymentProperties: s.Shape<CheckoutResponsePayment> = {
  id: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => paymentStatusSchema)),
  isTest: s.optional(s.boolean()),
  amount: s.string(),
  currency: currencySchema,
  description: s.optionalNullable(s.string()),
  order: s.nullable(s.lazy(() => orderResponseInternalSchema)),
  meta: s.optionalNullable(s.lazy(() => metaSchema)),
  attachment: s.optionalNullable(s.lazy(() => attachmentV1Schema)),
  _keysMap: {
    createdAt: "created_at",
    isTest: "is_test",
  },
};

export const checkoutResponsePaymentInternalSchema: Schema<CheckoutResponsePayment> =
  s.object<CheckoutResponsePayment>(checkoutResponsePaymentProperties, { additionalProperties: s.json() });

export const checkoutResponsePaymentSchema: Schema<CheckoutResponsePayment> = s.lazySchema(() =>
  s.object<CheckoutResponsePayment>(
    {
      ...checkoutResponsePaymentProperties,
      order: s.nullable(s.lazy(() => orderResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
