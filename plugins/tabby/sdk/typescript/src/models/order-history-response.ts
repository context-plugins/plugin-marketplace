import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buyerResponseInternalSchema, buyerResponseSchema, type BuyerResponse } from "./buyer-response.js";
import {
  orderItemHistoryResponseInternalSchema,
  orderItemHistoryResponseSchema,
  type OrderItemHistoryResponse,
} from "./order-item-history-response.js";
import { paymentMethodSchema, type PaymentMethod } from "./payment-method.js";
import { shippingAddressResponseSchema, type ShippingAddressResponse } from "./shipping-address-response.js";
import {
  statusTabbyApiReferencePaymentsApiSchema,
  type StatusTabbyApiReferencePaymentsApi,
} from "./status-tabby-api-reference-payments-api.js";

export type OrderHistoryResponse = {
  /** Date and time the order was placed, in UTC, and displayed in ISO 8601 datetime format. */
  purchasedAt: Date | null;
  /**
   * Total payment amount, including tax, shipping, and excluding any discounts. Allows to send up
   * to 2 decimals for AED and SAR, up to 3 decimals for KWD.
   */
  amount: string | null;
  /** Payment method used. */
  paymentMethod?: PaymentMethod | null;
  /** Status of the order. */
  status: StatusTabbyApiReferencePaymentsApi | null;
  /** Customer information */
  buyer: BuyerResponse | null;
  shippingAddress: ShippingAddressResponse | null;
  /**
   * Array of objects representing the order items in this payment. If you want to offer consumers a
   * discount, use this object to create a “discount order item”, with the unit_price set to the
   * negative value of the discount.
   */
  items?: OrderItemHistoryResponse[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderHistoryResponseProperties: s.Shape<OrderHistoryResponse> = {
  purchasedAt: s.nullable(s.dateTime()),
  amount: s.nullable(s.string()),
  paymentMethod: s.optionalNullable(s.lazy(() => paymentMethodSchema)),
  status: s.nullable(s.lazy(() => statusTabbyApiReferencePaymentsApiSchema)),
  buyer: s.nullable(s.lazy(() => buyerResponseInternalSchema)),
  shippingAddress: s.nullable(s.lazy(() => shippingAddressResponseSchema)),
  items: s.optionalNullable(s.array(s.lazy(() => orderItemHistoryResponseInternalSchema))),
  _keysMap: {
    purchasedAt: "purchased_at",
    paymentMethod: "payment_method",
    shippingAddress: "shipping_address",
  },
};

export const orderHistoryResponseInternalSchema: Schema<OrderHistoryResponse> =
  s.object<OrderHistoryResponse>(orderHistoryResponseProperties, { additionalProperties: s.json() });

export const orderHistoryResponseSchema: Schema<OrderHistoryResponse> = s.lazySchema(() =>
  s.object<OrderHistoryResponse>(
    {
      ...orderHistoryResponseProperties,
      buyer: s.nullable(s.lazy(() => buyerResponseSchema)),
      items: s.optionalNullable(s.array(s.lazy(() => orderItemHistoryResponseSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
