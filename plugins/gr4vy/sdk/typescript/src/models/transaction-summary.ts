import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardRedemptionSchema, type GiftCardRedemption } from "./gift-card-redemption.js";
import { transactionIntent3Schema, type TransactionIntent3 } from "./transaction-intent3.js";
import { transactionStatus2Schema, type TransactionStatus2 } from "./transaction-status2.js";
import { Type70, type70Schema } from "./type70.js";
import { buyer18Schema, type Buyer18 } from "./unions/buyer18.js";
import { checkoutSessionIdSchema, type CheckoutSessionId } from "./unions/checkout-session-id.js";
import { country3Schema, type Country3 } from "./unions/country3.js";
import { errorCodeSchema, type ErrorCode } from "./unions/error-code.js";
import { externalIdentifier32Schema, type ExternalIdentifier32 } from "./unions/external-identifier32.js";
import { giftCardService31Schema, type GiftCardService31 } from "./unions/gift-card-service31.js";
import { instrumentType1ModelSchema, type InstrumentType1Model } from "./unions/instrument-type1-model.js";
import { method241Schema, type Method241 } from "./unions/method241.js";
import { paymentMethod11ModelSchema, type PaymentMethod11Model } from "./unions/payment-method11-model.js";
import { paymentService1Schema, type PaymentService1 } from "./unions/payment-service1.js";
import { rawResponseCodeSchema, type RawResponseCode } from "./unions/raw-response-code.js";
import {
  rawResponseDescription1Schema,
  type RawResponseDescription1,
} from "./unions/raw-response-description1.js";
import {
  reauthorizedFromTransactionIdSchema,
  type ReauthorizedFromTransactionId,
} from "./unions/reauthorized-from-transaction-id.js";
import { settledCurrency1Schema, type SettledCurrency1 } from "./unions/settled-currency1.js";
import { shippingDetails111Schema, type ShippingDetails111 } from "./unions/shipping-details111.js";

/** A transaction, summarised */
export type TransactionSummary = {
  /** Always `transaction`. @default Type70.Transaction */
  type?: Type70;
  /** The ID for the transaction. */
  id: string;
  /**
   * The base62 encoded transaction ID. This represents a shorter version of this transaction's `id`
   * which is sent to payment services, anti-fraud services, and other connectors. You can use this
   * ID to reconcile a payment service's transaction against our system. This ID is sent instead of
   * the transaction ID because not all services support 36 digit identifiers.
   */
  reconciliationId: string;
  /** The ID of the merchant account this transaction belongs to. */
  merchantAccountId: string;
  /** The currency code for this transaction. */
  currency: string;
  /** The total amount for this transaction across all funding sources including gift cards. */
  amount: number;
  /**
   * The status of the transaction for the `payment_method`. The status may change over time as
   * asynchronous processing events occur.
   */
  status: TransactionStatus2;
  /**
   * The amount for this transaction that has been authorized for the `payment_method`. This can be
   * less than the `amount` if gift cards were used.
   */
  authorizedAmount: number;
  /**
   * The total amount captured for this transaction, in the smallest currency unit (for example,
   * cents or pence). This can be the full value of the `authorized_amount` or less.
   */
  capturedAmount: number;
  /**
   * The total amount refunded for this transaction, in the smallest currency unit (for example,
   * cents or pence). This can be the full value of the `captured_amount` or less.
   */
  refundedAmount: number;
  /** The ISO 4217 currency code of this transaction's settlement. */
  settledCurrency?: SettledCurrency1;
  /**
   * The net amount settled for this transaction, in the smallest currency unit (for example, cents
   * or pence).
   */
  settledAmount: number;
  /** Indicates whether this transaction has been settled. */
  settled: boolean;
  /**
   * The 2-letter ISO 3166-1 alpha-2 country code for the transaction. Used to filter payment
   * services for processing.
   */
  country?: Country3;
  /** An external identifier that can be used to match the transaction against your own records. */
  externalIdentifier?: ExternalIdentifier32;
  /** The original `intent` used when the transaction was created. */
  intent: TransactionIntent3;
  /** The payment method used for this transaction. */
  paymentMethod?: PaymentMethod11Model;
  /** The method used for the transaction. */
  method?: Method241;
  /** The name of the instrument used to process the transaction. */
  instrumentType?: InstrumentType1Model;
  /** The standardized error code set by Gr4vy. */
  errorCode?: ErrorCode;
  /** The payment service used for this transaction. */
  paymentService?: PaymentService1;
  /** Whether a manual anti fraud review is pending with an anti fraud service. @default false */
  pendingReview?: boolean;
  /** The buyer used for this transaction. */
  buyer?: Buyer18;
  /**
   * This is the response code received from the payment service. This can be set to any value and
   * is not standardized across different payment services.
   */
  rawResponseCode?: RawResponseCode;
  /**
   * This is the response description received from the payment service. This can be set to any
   * value and is not standardized across different payment services.
   */
  rawResponseDescription?: RawResponseDescription1;
  /** The shipping details associated with the transaction. */
  shippingDetails?: ShippingDetails111;
  /** The identifier for the checkout session this transaction is associated with. */
  checkoutSessionId?: CheckoutSessionId;
  /** The gift cards redeemed for this transaction. */
  giftCardRedemptions: GiftCardRedemption[];
  /** The gift card service used for this transaction. */
  giftCardService?: GiftCardService31;
  /** The date and time when the transaction was created, in ISO 8601 format. */
  createdAt: Date;
  /** The date and time when the transaction was last updated, in ISO 8601 format. */
  updatedAt: Date;
  /** Indicates whether this transaction has been disputed. */
  disputed: boolean;
  /** The identifier of the transaction from which this transaction was reauthorized. */
  reauthorizedFromTransactionId?: ReauthorizedFromTransactionId;
};

export const transactionSummarySchema: Schema<TransactionSummary> = s.object<TransactionSummary>({
  type: s.defaulted(type70Schema, Type70.Transaction),
  id: s.string(),
  reconciliationId: s.string(),
  merchantAccountId: s.string(),
  currency: s.string(),
  amount: s.int(),
  status: transactionStatus2Schema,
  authorizedAmount: s.int(),
  capturedAmount: s.int(),
  refundedAmount: s.int(),
  settledCurrency: s.optional(s.lazy(() => settledCurrency1Schema)),
  settledAmount: s.int(),
  settled: s.boolean(),
  country: s.optional(s.lazy(() => country3Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier32Schema)),
  intent: transactionIntent3Schema,
  paymentMethod: s.optional(s.lazy(() => paymentMethod11ModelSchema)),
  method: s.optional(s.lazy(() => method241Schema)),
  instrumentType: s.optional(s.lazy(() => instrumentType1ModelSchema)),
  errorCode: s.optional(s.lazy(() => errorCodeSchema)),
  paymentService: s.optional(s.lazy(() => paymentService1Schema)),
  pendingReview: s.defaulted(s.boolean(), false),
  buyer: s.optional(s.lazy(() => buyer18Schema)),
  rawResponseCode: s.optional(s.lazy(() => rawResponseCodeSchema)),
  rawResponseDescription: s.optional(s.lazy(() => rawResponseDescription1Schema)),
  shippingDetails: s.optional(s.lazy(() => shippingDetails111Schema)),
  checkoutSessionId: s.optional(s.lazy(() => checkoutSessionIdSchema)),
  giftCardRedemptions: s.array(s.lazy(() => giftCardRedemptionSchema)),
  giftCardService: s.optional(s.lazy(() => giftCardService31Schema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  disputed: s.boolean(),
  reauthorizedFromTransactionId: s.optional(s.lazy(() => reauthorizedFromTransactionIdSchema)),
  _keysMap: {
    reconciliationId: "reconciliation_id",
    merchantAccountId: "merchant_account_id",
    authorizedAmount: "authorized_amount",
    capturedAmount: "captured_amount",
    refundedAmount: "refunded_amount",
    settledCurrency: "settled_currency",
    settledAmount: "settled_amount",
    externalIdentifier: "external_identifier",
    paymentMethod: "payment_method",
    instrumentType: "instrument_type",
    errorCode: "error_code",
    paymentService: "payment_service",
    pendingReview: "pending_review",
    rawResponseCode: "raw_response_code",
    rawResponseDescription: "raw_response_description",
    shippingDetails: "shipping_details",
    checkoutSessionId: "checkout_session_id",
    giftCardRedemptions: "gift_card_redemptions",
    giftCardService: "gift_card_service",
    createdAt: "created_at",
    updatedAt: "updated_at",
    reauthorizedFromTransactionId: "reauthorized_from_transaction_id",
  },
});
