import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentV1Schema, type AttachmentV1 } from "./attachment-v1.js";
import {
  buyerHistoryResponseInternalSchema,
  buyerHistoryResponseSchema,
  type BuyerHistoryResponse,
} from "./buyer-history-response.js";
import { buyerResponseInternalSchema, buyerResponseSchema, type BuyerResponse } from "./buyer-response.js";
import {
  captureResponseInternalSchema,
  captureResponseSchema,
  type CaptureResponse,
} from "./capture-response.js";
import { currencySchema, type Currency } from "./currency.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  orderHistoryResponseInternalSchema,
  orderHistoryResponseSchema,
  type OrderHistoryResponse,
} from "./order-history-response.js";
import { orderResponseInternalSchema, orderResponseSchema, type OrderResponse } from "./order-response.js";
import { paymentStatusSchema, type PaymentStatus } from "./payment-status.js";
import {
  refundResponseInternalSchema,
  refundResponseSchema,
  type RefundResponse,
} from "./refund-response.js";
import { shippingAddressResponseSchema, type ShippingAddressResponse } from "./shipping-address-response.js";

/** Payment object. */
export type PaymentRefundResponse = {
  /** Unique identifier for the payment (UUID), assigned by Tabby. Save it on your side! */
  id?: string;
  /** Date and time the payment was created, in UTC, and displayed in ISO 8601 datetime format. */
  createdAt?: Date;
  /** Date and time the payment expires, in UTC, and displayed in ISO 8601 datetime format. */
  expiresAt?: Date;
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
  /** Customer information */
  buyer: BuyerResponse | null;
  shippingAddress: ShippingAddressResponse | null;
  order: OrderResponse | null;
  captures?: CaptureResponse[];
  refunds?: RefundResponse[];
  /**
   * Customer information. `registered_since` (as a date of the customer's registration in the App),
   * `loyalty_level` (as a number of successful orders) and `wishlist_count` (paid amount by a
   * customer previously, e.g. 500) must be sent for Monthly Billing. `is_social_networks_connected`
   * is also required for Monthly Billing.
   */
  buyerHistory: BuyerHistoryResponse;
  /**
   * Array of objects, should contain information on 5-10 previously placed via any payment method
   * orders in any status, current order excluded.
   */
  orderHistory: OrderHistoryResponse[] | null;
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

const paymentRefundResponseProperties: s.Shape<PaymentRefundResponse> = {
  id: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  expiresAt: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => paymentStatusSchema)),
  isTest: s.optional(s.boolean()),
  amount: s.string(),
  currency: currencySchema,
  description: s.optionalNullable(s.string()),
  buyer: s.nullable(s.lazy(() => buyerResponseInternalSchema)),
  shippingAddress: s.nullable(s.lazy(() => shippingAddressResponseSchema)),
  order: s.nullable(s.lazy(() => orderResponseInternalSchema)),
  captures: s.optional(s.array(s.lazy(() => captureResponseInternalSchema))),
  refunds: s.optional(s.array(s.lazy(() => refundResponseInternalSchema))),
  buyerHistory: buyerHistoryResponseInternalSchema,
  orderHistory: s.nullable(s.array(s.lazy(() => orderHistoryResponseInternalSchema))),
  meta: s.optionalNullable(s.lazy(() => metaSchema)),
  attachment: s.optionalNullable(s.lazy(() => attachmentV1Schema)),
  _keysMap: {
    createdAt: "created_at",
    expiresAt: "expires_at",
    isTest: "is_test",
    shippingAddress: "shipping_address",
    buyerHistory: "buyer_history",
    orderHistory: "order_history",
  },
};

export const paymentRefundResponseInternalSchema: Schema<PaymentRefundResponse> =
  s.object<PaymentRefundResponse>(paymentRefundResponseProperties, { additionalProperties: s.json() });

export const paymentRefundResponseSchema: Schema<PaymentRefundResponse> = s.lazySchema(() =>
  s.object<PaymentRefundResponse>(
    {
      ...paymentRefundResponseProperties,
      buyer: s.nullable(s.lazy(() => buyerResponseSchema)),
      order: s.nullable(s.lazy(() => orderResponseSchema)),
      captures: s.optional(s.array(s.lazy(() => captureResponseSchema))),
      refunds: s.optional(s.array(s.lazy(() => refundResponseSchema))),
      buyerHistory: buyerHistoryResponseSchema,
      orderHistory: s.nullable(s.array(s.lazy(() => orderHistoryResponseSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
