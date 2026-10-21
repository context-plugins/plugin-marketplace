import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type14, type14Schema } from "./type14.js";
import { airline1Schema, type Airline1 } from "./unions/airline1.js";
import { amountSchema, type Amount } from "./unions/amount.js";
import { buyer1Schema, type Buyer1 } from "./unions/buyer1.js";
import { cartItems1Schema, type CartItems1 } from "./unions/cart-items1.js";
import { currencySchema, type Currency } from "./unions/currency.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { paymentMethod1ModelSchema, type PaymentMethod1Model } from "./unions/payment-method1-model.js";
import { paymentServiceIdSchema, type PaymentServiceId } from "./unions/payment-service-id.js";

export type CheckoutSession = {
  /** An array of cart items that represents the line items of a transaction. */
  cartItems?: CartItems1;
  /**
   * Any additional information about the transaction that you would like to store as key-value
   * pairs. This data is passed to payment service providers that support it.
   */
  metadata?: Metadata;
  /**
   * Provide buyer details for the transaction. No buyer resource will be created on Gr4vy when
   * used.
   */
  buyer?: Buyer1;
  /**
   * The airline addendum data which describes the airline booking associated with this transaction.
   */
  airline?: Airline1;
  /** The total amount for this transaction. */
  amount?: Amount;
  /** The currency code for this transaction. */
  currency?: Currency;
  /**
   * The unique identifier of an existing payment service. When provided, the created transaction
   * will be processed by the given payment service and any routing rules will be skipped.
   */
  paymentServiceId?: PaymentServiceId;
  /** Always `checkout-session` @default Type14.CheckoutSession */
  type?: Type14;
  /** The ID for the checkout session. */
  id: string;
  /** The date and time when this checkout session expires. */
  expiresAt: Date;
  /** Information about the payment method stored on the checkout session. */
  paymentMethod?: PaymentMethod1Model;
};

export const checkoutSessionSchema: Schema<CheckoutSession> = s.object<CheckoutSession>({
  cartItems: s.optional(s.lazy(() => cartItems1Schema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  buyer: s.optional(s.lazy(() => buyer1Schema)),
  airline: s.optional(s.lazy(() => airline1Schema)),
  amount: s.optional(s.lazy(() => amountSchema)),
  currency: s.optional(s.lazy(() => currencySchema)),
  paymentServiceId: s.optional(s.lazy(() => paymentServiceIdSchema)),
  type: s.defaulted(type14Schema, Type14.CheckoutSession),
  id: s.string(),
  expiresAt: s.dateTime(),
  paymentMethod: s.optional(s.lazy(() => paymentMethod1ModelSchema)),
  _keysMap: {
    cartItems: "cart_items",
    paymentServiceId: "payment_service_id",
    expiresAt: "expires_at",
    paymentMethod: "payment_method",
  },
});
