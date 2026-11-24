import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buyerInternalSchema, buyerSchema, type Buyer } from "./buyer.js";
import {
  orderItemHistoryRequestInternalSchema,
  orderItemHistoryRequestSchema,
  type OrderItemHistoryRequest,
} from "./order-item-history-request.js";
import { paymentMethodSchema, type PaymentMethod } from "./payment-method.js";
import { shippingAddressSchema, type ShippingAddress } from "./shipping-address.js";
import { status1Schema, type Status1 } from "./status1.js";

export type CheckoutCreationOrderHistory = {
  /** Date and time the order was placed, in UTC, and displayed in ISO 8601 datetime format. */
  purchasedAt: Date;
  /**
   * Total payment amount, including tax, shipping, and excluding any discounts. Allows to send up
   * to 2 decimals for AED and SAR, up to 3 decimals for KWD.
   */
  amount: string;
  /** Payment method used. */
  paymentMethod?: PaymentMethod;
  /** Status of the order. */
  status: Status1;
  /** Customer information */
  buyer: Buyer;
  shippingAddress: ShippingAddress;
  /**
   * Array of objects representing the order items in this payment. If you want to offer consumers a
   * discount, use this object to create a “discount order item”, with the unit_price set to the
   * negative value of the discount.
   */
  items?: OrderItemHistoryRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const checkoutCreationOrderHistoryProperties: s.Shape<CheckoutCreationOrderHistory> = {
  purchasedAt: s.dateTime(),
  amount: s.string(),
  paymentMethod: s.optional(s.lazy(() => paymentMethodSchema)),
  status: status1Schema,
  buyer: buyerInternalSchema,
  shippingAddress: shippingAddressSchema,
  items: s.optional(s.array(s.lazy(() => orderItemHistoryRequestInternalSchema))),
  _keysMap: {
    purchasedAt: "purchased_at",
    paymentMethod: "payment_method",
    shippingAddress: "shipping_address",
  },
};

export const checkoutCreationOrderHistoryInternalSchema: Schema<CheckoutCreationOrderHistory> =
  s.object<CheckoutCreationOrderHistory>(checkoutCreationOrderHistoryProperties, {
    additionalProperties: s.json(),
  });

export const checkoutCreationOrderHistorySchema: Schema<CheckoutCreationOrderHistory> = s.lazySchema(() =>
  s.object<CheckoutCreationOrderHistory>(
    {
      ...checkoutCreationOrderHistoryProperties,
      buyer: buyerSchema,
      items: s.optional(s.array(s.lazy(() => orderItemHistoryRequestSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
