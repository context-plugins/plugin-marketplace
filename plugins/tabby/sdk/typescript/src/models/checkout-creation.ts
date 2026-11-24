import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentV1Schema, type AttachmentV1 } from "./attachment-v1.js";
import { buyerHistoryInternalSchema, buyerHistorySchema, type BuyerHistory } from "./buyer-history.js";
import { buyerInternalSchema, buyerSchema, type Buyer } from "./buyer.js";
import {
  checkoutCreationOrderHistoryInternalSchema,
  checkoutCreationOrderHistorySchema,
  type CheckoutCreationOrderHistory,
} from "./checkout-creation-order-history.js";
import { currencySchema, type Currency } from "./currency.js";
import { metaSchema, type Meta } from "./meta.js";
import { orderInternalSchema, orderSchema, type Order } from "./order.js";
import { shippingAddressSchema, type ShippingAddress } from "./shipping-address.js";

/** Payment object associated with the current session. */
export type CheckoutCreation = {
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
  description?: string;
  /** Customer information */
  buyer: Buyer;
  shippingAddress: ShippingAddress;
  order: Order;
  /**
   * Customer information. `registered_since` (as a date of the customer's registration in the App),
   * `loyalty_level` (as a number of successful orders) and `wishlist_count` (paid amount by a
   * customer previously, e.g. 500) must be sent for Monthly Billing. `is_social_networks_connected`
   * is also required for Monthly Billing.
   */
  buyerHistory: BuyerHistory;
  /**
   * Array of objects, should contain information on 5-10 previously placed via any payment method
   * orders in any status, current order excluded.
   */
  orderHistory: CheckoutCreationOrderHistory[];
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

const checkoutCreationProperties: s.Shape<CheckoutCreation> = {
  amount: s.string(),
  currency: currencySchema,
  description: s.optional(s.string()),
  buyer: buyerInternalSchema,
  shippingAddress: shippingAddressSchema,
  order: orderInternalSchema,
  buyerHistory: buyerHistoryInternalSchema,
  orderHistory: s.array(s.lazy(() => checkoutCreationOrderHistoryInternalSchema)),
  meta: s.optionalNullable(s.lazy(() => metaSchema)),
  attachment: s.optionalNullable(s.lazy(() => attachmentV1Schema)),
  _keysMap: {
    shippingAddress: "shipping_address",
    buyerHistory: "buyer_history",
    orderHistory: "order_history",
  },
};

export const checkoutCreationInternalSchema: Schema<CheckoutCreation> = s.object<CheckoutCreation>(
  checkoutCreationProperties,
  { additionalProperties: s.json() },
);

export const checkoutCreationSchema: Schema<CheckoutCreation> = s.lazySchema(() =>
  s.object<CheckoutCreation>(
    {
      ...checkoutCreationProperties,
      buyer: buyerSchema,
      order: orderSchema,
      buyerHistory: buyerHistorySchema,
      orderHistory: s.array(s.lazy(() => checkoutCreationOrderHistorySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
