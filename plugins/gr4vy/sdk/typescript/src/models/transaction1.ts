import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardRedemptionSchema, type GiftCardRedemption } from "./gift-card-redemption.js";
import {
  transactionIntentOutcome2Schema,
  type TransactionIntentOutcome2,
} from "./transaction-intent-outcome2.js";
import { transactionIntent3Schema, type TransactionIntent3 } from "./transaction-intent3.js";
import {
  transactionPaymentSource3Schema,
  type TransactionPaymentSource3,
} from "./transaction-payment-source3.js";
import { transactionStatus2Schema, type TransactionStatus2 } from "./transaction-status2.js";
import { Type70, type70Schema } from "./type70.js";
import { additionalIdentifiersSchema, type AdditionalIdentifiers } from "./unions/additional-identifiers.js";
import { airline12Schema, type Airline12 } from "./unions/airline12.js";
import { amountIncludesTaxSchema, type AmountIncludesTax } from "./unions/amount-includes-tax.js";
import { antiFraudDecision1Schema, type AntiFraudDecision1 } from "./unions/anti-fraud-decision1.js";
import { approvalExpiresAtSchema, type ApprovalExpiresAt } from "./unions/approval-expires-at.js";
import { authResponseCodeSchema, type AuthResponseCode } from "./unions/auth-response-code.js";
import { authorizedAtSchema, type AuthorizedAt } from "./unions/authorized-at.js";
import { avsResponseCode1Schema, type AvsResponseCode1 } from "./unions/avs-response-code1.js";
import {
  buyerApprovalTimedoutAtSchema,
  type BuyerApprovalTimedoutAt,
} from "./unions/buyer-approval-timedout-at.js";
import { buyer18Schema, type Buyer18 } from "./unions/buyer18.js";
import { canceledAtSchema, type CanceledAt } from "./unions/canceled-at.js";
import { capturedAt1Schema, type CapturedAt1 } from "./unions/captured-at1.js";
import { cartItems1Schema, type CartItems1 } from "./unions/cart-items1.js";
import { checkoutSessionIdSchema, type CheckoutSessionId } from "./unions/checkout-session-id.js";
import { country3Schema, type Country3 } from "./unions/country3.js";
import {
  customerReferenceNumberSchema,
  type CustomerReferenceNumber,
} from "./unions/customer-reference-number.js";
import { cvvResponseCode1Schema, type CvvResponseCode1 } from "./unions/cvv-response-code1.js";
import { dutyAmount1Schema, type DutyAmount1 } from "./unions/duty-amount1.js";
import { errorCodeSchema, type ErrorCode } from "./unions/error-code.js";
import { externalIdentifier32Schema, type ExternalIdentifier32 } from "./unions/external-identifier32.js";
import { giftCardService31Schema, type GiftCardService31 } from "./unions/gift-card-service31.js";
import { installmentCount2Schema, type InstallmentCount2 } from "./unions/installment-count2.js";
import { instrumentType1ModelSchema, type InstrumentType1Model } from "./unions/instrument-type1-model.js";
import { isoResponseCode1Schema, type IsoResponseCode1 } from "./unions/iso-response-code1.js";
import { merchantAdviceCodeSchema, type MerchantAdviceCode } from "./unions/merchant-advice-code.js";
import { merchantTaxIdSchema, type MerchantTaxId } from "./unions/merchant-tax-id.js";
import { metadata9Schema, type Metadata9 } from "./unions/metadata9.js";
import { method241Schema, type Method241 } from "./unions/method241.js";
import { paymentMethod11ModelSchema, type PaymentMethod11Model } from "./unions/payment-method11-model.js";
import {
  paymentServiceTransactionIdSchema,
  type PaymentServiceTransactionId,
} from "./unions/payment-service-transaction-id.js";
import { paymentService1Schema, type PaymentService1 } from "./unions/payment-service1.js";
import { purchaseOrderNumber1Schema, type PurchaseOrderNumber1 } from "./unions/purchase-order-number1.js";
import { rawResponseCodeSchema, type RawResponseCode } from "./unions/raw-response-code.js";
import {
  rawResponseDescription1Schema,
  type RawResponseDescription1,
} from "./unions/raw-response-description1.js";
import {
  reauthorizedFromTransactionIdSchema,
  type ReauthorizedFromTransactionId,
} from "./unions/reauthorized-from-transaction-id.js";
import { recipient1Schema, type Recipient1 } from "./unions/recipient1.js";
import { schemeTransactionId3Schema, type SchemeTransactionId3 } from "./unions/scheme-transaction-id3.js";
import { sessionTokenSchema, type SessionToken } from "./unions/session-token.js";
import { settledCurrency1Schema, type SettledCurrency1 } from "./unions/settled-currency1.js";
import { shippingAmount1Schema, type ShippingAmount1 } from "./unions/shipping-amount1.js";
import { shippingDetails111Schema, type ShippingDetails111 } from "./unions/shipping-details111.js";
import {
  statementDescriptor111Schema,
  type StatementDescriptor111,
} from "./unions/statement-descriptor111.js";
import { supplierOrderNumberSchema, type SupplierOrderNumber } from "./unions/supplier-order-number.js";
import { taxAmount2Schema, type TaxAmount2 } from "./unions/tax-amount2.js";
import { threeDSecure1Schema, type ThreeDSecure1 } from "./unions/three-dsecure1.js";
import { transactionLinkId3Schema, type TransactionLinkId3 } from "./unions/transaction-link-id3.js";
import { voidedAtSchema, type VoidedAt } from "./unions/voided-at.js";

/** The transaction associated to this incremental authorization. */
export type Transaction1 = {
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
  /** Contains information about an airline travel, if applicable. */
  airline?: Airline12;
  /** This is the response description received from the processor. */
  authResponseCode?: AuthResponseCode;
  /**
   * The response code received from the payment service for the Address Verification Check (AVS).
   * This code is mapped to a standardized Gr4vy AVS response code.
   */
  avsResponseCode?: AvsResponseCode1;
  /**
   * The response code received from the payment service for the Card Verification Value (CVV). This
   * code is mapped to a standardized Gr4vy CVV response code.
   */
  cvvResponseCode?: CvvResponseCode1;
  /**
   * The mapped decision received from the anti-fraud service. In case of a review decision this
   * field is not updated once the review is resolved.
   */
  antiFraudDecision?: AntiFraudDecision1;
  /** The source of the transaction. */
  paymentSource: TransactionPaymentSource3;
  /** Indicates whether the transaction was initiated by the merchant or the customer. */
  merchantInitiated: boolean;
  /** Indicates whether the transaction represents a subsequent payment or an initial one. */
  isSubsequentPayment: boolean;
  /** An array of cart items that represents the line items of a transaction. */
  cartItems?: CartItems1;
  /** The statement descriptor is the text to be shown on the buyer's statements. */
  statementDescriptor?: StatementDescriptor111;
  /** An identifier for the transaction used by the scheme itself, when available. */
  schemeTransactionId?: SchemeTransactionId3;
  /**
   * A transaction link identifier for the transaction used by the scheme itself, when available.
   */
  transactionLinkId?: TransactionLinkId3;
  /** The 3-D Secure data that was sent to the payment service for the transaction. */
  threeDSecure?: ThreeDSecure1;
  /** The payment service's unique ID for the transaction. */
  paymentServiceTransactionId?: PaymentServiceTransactionId;
  /**
   * A list of additional identifiers that we may keep track of to manage this transaction. This may
   * include the authorization ID, capture ID, and processor ID, as well as an undefined list of
   * additional identifiers.
   */
  additionalIdentifiers?: Record<string, AdditionalIdentifiers>;
  /** Additional information about the transaction stored as key-value pairs. */
  metadata?: Metadata9;
  /** The date this transaction was authorized at. */
  authorizedAt?: AuthorizedAt;
  /** The date this transaction was captured at. */
  capturedAt?: CapturedAt1;
  /** The date this transaction was voided at. */
  voidedAt?: VoidedAt;
  /** The date this transaction was canceled at. */
  canceledAt?: CanceledAt;
  /** The date this transaction's approval URL will expire at. */
  approvalExpiresAt?: ApprovalExpiresAt;
  /** The date this transaction's approval timed out at. */
  buyerApprovalTimedoutAt?: BuyerApprovalTimedoutAt;
  /**
   * The outcome of the original intent of a transaction. This allows you to understand if the
   * intent of the transaction (e.g. `capture` or `authorize`) has been achieved when dealing with
   * multiple payment instruments.
   */
  intentOutcome: TransactionIntentOutcome2;
  /**
   * The outcome of the original intent of a transaction. This allows you to understand if the
   * intent of the transaction (e.g. `capture` or `authorize`) has been achieved when dealing with
   * multiple payment instruments.
   */
  multiTender: boolean;
  /**
   * Marks the transaction as an AFT. Requires the payment service to support this feature, and
   * might `recipient` and `buyer` data
   */
  accountFundingTransaction: boolean;
  /** The recipient of any account to account funding. For use with AFTs. */
  recipient?: Recipient1;
  /**
   * An optional merchant advice code which provides insight into the type of transaction or reason
   * why the payment failed.
   */
  merchantAdviceCode?: MerchantAdviceCode;
  /** The number of installments for this transaction, if applicable. */
  installmentCount?: InstallmentCount2;
  /** A session token that can be used to fetch session data for direct client integrations. */
  sessionToken?: SessionToken;
  /**
   * The sales tax amount for this transaction, represented as a monetary amount in the smallest
   * currency unit for the given currency, for example `1299` cents to create an authorization for
   * `$12.99`
   */
  taxAmount?: TaxAmount2;
  /** Merchant tax ID (for example, EIN or VAT number). */
  merchantTaxId?: MerchantTaxId;
  /** Invoice number or Purchase Order number. */
  purchaseOrderNumber?: PurchaseOrderNumber1;
  /** Customer code or reference. */
  customerReferenceNumber?: CustomerReferenceNumber;
  /** Whether the tax is included in the amount. */
  amountIncludesTax?: AmountIncludesTax;
  /** The merchant's unique identifier for the sales order or invoice. */
  supplierOrderNumber?: SupplierOrderNumber;
  /** Total charges for import/export duties. */
  dutyAmount?: DutyAmount1;
  /** Total shipping amount. */
  shippingAmount?: ShippingAmount1;
  /** This is the ISO8583 response code code received from the payment service. */
  isoResponseCode?: IsoResponseCode1;
};

export const transaction1Schema: Schema<Transaction1> = s.object<Transaction1>({
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
  airline: s.optional(s.lazy(() => airline12Schema)),
  authResponseCode: s.optional(s.lazy(() => authResponseCodeSchema)),
  avsResponseCode: s.optional(s.lazy(() => avsResponseCode1Schema)),
  cvvResponseCode: s.optional(s.lazy(() => cvvResponseCode1Schema)),
  antiFraudDecision: s.optional(s.lazy(() => antiFraudDecision1Schema)),
  paymentSource: transactionPaymentSource3Schema,
  merchantInitiated: s.boolean(),
  isSubsequentPayment: s.boolean(),
  cartItems: s.optional(s.lazy(() => cartItems1Schema)),
  statementDescriptor: s.optional(s.lazy(() => statementDescriptor111Schema)),
  schemeTransactionId: s.optional(s.lazy(() => schemeTransactionId3Schema)),
  transactionLinkId: s.optional(s.lazy(() => transactionLinkId3Schema)),
  threeDSecure: s.optional(s.lazy(() => threeDSecure1Schema)),
  paymentServiceTransactionId: s.optional(s.lazy(() => paymentServiceTransactionIdSchema)),
  additionalIdentifiers: s.optional(
    s.record(
      s.string(),
      s.lazy(() => additionalIdentifiersSchema),
    ),
  ),
  metadata: s.optional(s.lazy(() => metadata9Schema)),
  authorizedAt: s.optional(s.lazy(() => authorizedAtSchema)),
  capturedAt: s.optional(s.lazy(() => capturedAt1Schema)),
  voidedAt: s.optional(s.lazy(() => voidedAtSchema)),
  canceledAt: s.optional(s.lazy(() => canceledAtSchema)),
  approvalExpiresAt: s.optional(s.lazy(() => approvalExpiresAtSchema)),
  buyerApprovalTimedoutAt: s.optional(s.lazy(() => buyerApprovalTimedoutAtSchema)),
  intentOutcome: transactionIntentOutcome2Schema,
  multiTender: s.boolean(),
  accountFundingTransaction: s.boolean(),
  recipient: s.optional(s.lazy(() => recipient1Schema)),
  merchantAdviceCode: s.optional(s.lazy(() => merchantAdviceCodeSchema)),
  installmentCount: s.optional(s.lazy(() => installmentCount2Schema)),
  sessionToken: s.optional(s.lazy(() => sessionTokenSchema)),
  taxAmount: s.optional(s.lazy(() => taxAmount2Schema)),
  merchantTaxId: s.optional(s.lazy(() => merchantTaxIdSchema)),
  purchaseOrderNumber: s.optional(s.lazy(() => purchaseOrderNumber1Schema)),
  customerReferenceNumber: s.optional(s.lazy(() => customerReferenceNumberSchema)),
  amountIncludesTax: s.optional(s.lazy(() => amountIncludesTaxSchema)),
  supplierOrderNumber: s.optional(s.lazy(() => supplierOrderNumberSchema)),
  dutyAmount: s.optional(s.lazy(() => dutyAmount1Schema)),
  shippingAmount: s.optional(s.lazy(() => shippingAmount1Schema)),
  isoResponseCode: s.optional(s.lazy(() => isoResponseCode1Schema)),
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
    authResponseCode: "auth_response_code",
    avsResponseCode: "avs_response_code",
    cvvResponseCode: "cvv_response_code",
    antiFraudDecision: "anti_fraud_decision",
    paymentSource: "payment_source",
    merchantInitiated: "merchant_initiated",
    isSubsequentPayment: "is_subsequent_payment",
    cartItems: "cart_items",
    statementDescriptor: "statement_descriptor",
    schemeTransactionId: "scheme_transaction_id",
    transactionLinkId: "transaction_link_id",
    threeDSecure: "three_d_secure",
    paymentServiceTransactionId: "payment_service_transaction_id",
    additionalIdentifiers: "additional_identifiers",
    authorizedAt: "authorized_at",
    capturedAt: "captured_at",
    voidedAt: "voided_at",
    canceledAt: "canceled_at",
    approvalExpiresAt: "approval_expires_at",
    buyerApprovalTimedoutAt: "buyer_approval_timedout_at",
    intentOutcome: "intent_outcome",
    multiTender: "multi_tender",
    accountFundingTransaction: "account_funding_transaction",
    merchantAdviceCode: "merchant_advice_code",
    installmentCount: "installment_count",
    sessionToken: "session_token",
    taxAmount: "tax_amount",
    merchantTaxId: "merchant_tax_id",
    purchaseOrderNumber: "purchase_order_number",
    customerReferenceNumber: "customer_reference_number",
    amountIncludesTax: "amount_includes_tax",
    supplierOrderNumber: "supplier_order_number",
    dutyAmount: "duty_amount",
    shippingAmount: "shipping_amount",
    isoResponseCode: "iso_response_code",
  },
});
