import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { airline1Schema, type Airline1 } from "./unions/airline1.js";
import { amountSchema, type Amount } from "./unions/amount.js";
import { buyer1Schema, type Buyer1 } from "./unions/buyer1.js";
import { cartItems1Schema, type CartItems1 } from "./unions/cart-items1.js";
import { country3Schema, type Country3 } from "./unions/country3.js";
import { currencySchema, type Currency } from "./unions/currency.js";
import { intent1Schema, type Intent1 } from "./unions/intent1.js";
import { isSubsequentPaymentSchema, type IsSubsequentPayment } from "./unions/is-subsequent-payment.js";
import { merchantInitiatedSchema, type MerchantInitiated } from "./unions/merchant-initiated.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { paymentServiceIdSchema, type PaymentServiceId } from "./unions/payment-service-id.js";
import { paymentSourceModelSchema, type PaymentSourceModel } from "./unions/payment-source-model.js";

export type CheckoutSessionUpdate = {
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
  /** The time in seconds when this checkout session expires. @default 3600 */
  expiresIn?: number;
  /**
   * The 2-letter ISO 3166-1 alpha-2 country code for the transaction. Used to filter payment
   * services for processing.
   */
  country?: Country3;
  /**
   * Indicates whether the transaction represents a subsequent payment coming from a setup recurring
   * payment. Please note there are some restrictions on how this flag may be used.
   *
   * The flag can only be `false` (or not set) when the transaction meets one of the following
   * criteria:
   *
   * * It is not `merchant_initiated`.
   * * `payment_source` is set to `card_on_file`.
   *
   * The flag can only be set to `true` when the transaction meets one of the following criteria:
   * * It is not `merchant_initiated`.
   * * `payment_source` is set to `recurring` or `installment` and `merchant_initiated` is set to
   *   `true`.
   * * `payment_source` is set to `card_on_file`.
   */
  isSubsequentPayment?: IsSubsequentPayment;
  /** Indicates whether the transaction was initiated by the merchant (true) or customer (false). */
  merchantInitiated?: MerchantInitiated;
  /** The use-case for the the transaction. */
  paymentSource?: PaymentSourceModel;
  /**
   * Defines the intent to apply to transactions created via this checkout session. This determines
   * the desired initial state of the transaction.
   */
  intent?: Intent1;
};

export const checkoutSessionUpdateSchema: Schema<CheckoutSessionUpdate> = s.object<CheckoutSessionUpdate>({
  cartItems: s.optional(s.lazy(() => cartItems1Schema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  buyer: s.optional(s.lazy(() => buyer1Schema)),
  airline: s.optional(s.lazy(() => airline1Schema)),
  amount: s.optional(s.lazy(() => amountSchema)),
  currency: s.optional(s.lazy(() => currencySchema)),
  paymentServiceId: s.optional(s.lazy(() => paymentServiceIdSchema)),
  expiresIn: s.defaulted(s.float64(), 3600),
  country: s.optional(s.lazy(() => country3Schema)),
  isSubsequentPayment: s.optional(s.lazy(() => isSubsequentPaymentSchema)),
  merchantInitiated: s.optional(s.lazy(() => merchantInitiatedSchema)),
  paymentSource: s.optional(s.lazy(() => paymentSourceModelSchema)),
  intent: s.optional(s.lazy(() => intent1Schema)),
  _keysMap: {
    cartItems: "cart_items",
    paymentServiceId: "payment_service_id",
    expiresIn: "expires_in",
    isSubsequentPayment: "is_subsequent_payment",
    merchantInitiated: "merchant_initiated",
    paymentSource: "payment_source",
  },
});
