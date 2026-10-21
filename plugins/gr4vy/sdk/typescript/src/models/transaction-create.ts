import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIntent4Schema, type TransactionIntent4 } from "./transaction-intent4.js";
import {
  transactionPaymentSource4Schema,
  type TransactionPaymentSource4,
} from "./transaction-payment-source4.js";
import { airline1Schema, type Airline1 } from "./unions/airline1.js";
import { amountIncludesTaxSchema, type AmountIncludesTax } from "./unions/amount-includes-tax.js";
import { antiFraudFingerprintSchema, type AntiFraudFingerprint } from "./unions/anti-fraud-fingerprint.js";
import { approvalExpiresAt1Schema, type ApprovalExpiresAt1 } from "./unions/approval-expires-at1.js";
import { browserInfo1Schema, type BrowserInfo1 } from "./unions/browser-info1.js";
import {
  buyerExternalIdentifier19Schema,
  type BuyerExternalIdentifier19,
} from "./unions/buyer-external-identifier19.js";
import { buyerId22Schema, type BuyerId22 } from "./unions/buyer-id22.js";
import { buyer19Schema, type Buyer19 } from "./unions/buyer19.js";
import { cartItems1Schema, type CartItems1 } from "./unions/cart-items1.js";
import { connectionOptions2Schema, type ConnectionOptions2 } from "./unions/connection-options2.js";
import { country11Schema, type Country11 } from "./unions/country11.js";
import {
  customerReferenceNumberSchema,
  type CustomerReferenceNumber,
} from "./unions/customer-reference-number.js";
import { description6Schema, type Description6 } from "./unions/description6.js";
import { dutyAmount1Schema, type DutyAmount1 } from "./unions/duty-amount1.js";
import { externalIdentifier32Schema, type ExternalIdentifier32 } from "./unions/external-identifier32.js";
import { giftCards1Schema, type GiftCards1 } from "./unions/gift-cards1.js";
import { installmentCountSchema, type InstallmentCount } from "./unions/installment-count.js";
import { integrationClient11Schema, type IntegrationClient11 } from "./unions/integration-client11.js";
import { isAmountEstimatedSchema, type IsAmountEstimated } from "./unions/is-amount-estimated.js";
import { merchantTaxIdSchema, type MerchantTaxId } from "./unions/merchant-tax-id.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { paymentMethod11Schema, type PaymentMethod11 } from "./unions/payment-method11.js";
import { paymentServiceIdSchema, type PaymentServiceId } from "./unions/payment-service-id.js";
import {
  previousSchemeTransactionIdSchema,
  type PreviousSchemeTransactionId,
} from "./unions/previous-scheme-transaction-id.js";
import {
  previousTransactionLinkIdSchema,
  type PreviousTransactionLinkId,
} from "./unions/previous-transaction-link-id.js";
import { purchaseOrderNumber1Schema, type PurchaseOrderNumber1 } from "./unions/purchase-order-number1.js";
import { recipient1Schema, type Recipient1 } from "./unions/recipient1.js";
import { shippingAmount1Schema, type ShippingAmount1 } from "./unions/shipping-amount1.js";
import { shippingDetailsIdSchema, type ShippingDetailsId } from "./unions/shipping-details-id.js";
import { statementDescriptor12Schema, type StatementDescriptor12 } from "./unions/statement-descriptor12.js";
import { supplierOrderNumberSchema, type SupplierOrderNumber } from "./unions/supplier-order-number.js";
import { taxAmount2Schema, type TaxAmount2 } from "./unions/tax-amount2.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./unions/three-dsecure-data.js";
import { threeDSecure11Schema, type ThreeDSecure11 } from "./unions/three-dsecure11.js";

export type TransactionCreate = {
  /**
   * The monetary amount for this transaction, in the smallest currency unit for the given currency,
   * for example `1299` cents to create an authorization for `$12.99`. If the `intent` is set to
   * `capture`, an amount greater than zero must be supplied. All gift card amounts are subtracted
   * from this amount before the remainder is charged to the provided `payment_method`.
   */
  amount: number;
  /**
   * A supported ISO 4217 currency code. For redirect requests, this value must match the one
   * specified for `currency` in `payment_method`.
   */
  currency: string;
  /**
   * The 2-letter ISO code of the country where the transaction is processed. This is also used to
   * filter the payment services that can process the transaction. If this value is provided for
   * redirect requests and it's not `null`, it must match the one specified for `country` in
   * `payment_method`. Otherwise, the value specified for `country` in `payment_method` will be
   * assumed implicitly.
   */
  country?: Country11;
  /**
   * The optional payment method to use for this transaction. This field is required if no
   * `gift_cards` have been added.
   */
  paymentMethod?: PaymentMethod11;
  /**
   * Guest buyer details provided inline rather than creating a buyer resource beforehand and using
   * the `buyer_id` or `buyer_external_identifier` keys. No buyer resource will be created on Gr4vy
   * when used.
   */
  buyer?: Buyer19;
  /**
   * The ID of the buyer to associate this payment method to. If this field is provided then the
   * `buyer_external_identifier` field needs to be unset. If a stored payment method or gift card is
   * provided, then the buyer for that payment method needs to match the buyer for this field.
   */
  buyerId?: BuyerId22;
  /**
   * The `external_identifier` of the buyer to associate this payment method to. If this field is
   * provided then the `buyer_id` field needs to be unset. If a stored payment method or gift card
   * is provided, then the buyer for that payment method needs to match the buyer for this field.
   */
  buyerExternalIdentifier?: BuyerExternalIdentifier19;
  /**
   * The optional gift card(s) to use for this transaction. At least one gift card is required if no
   * other `payment_method` has been added. By default, only a maximum limit of 10 gift cards may be
   * used in a single transaction. Please contact our team to change this limit.
   */
  giftCards?: GiftCards1;
  /** An external identifier that can be used to match the transaction against your own records. */
  externalIdentifier?: ExternalIdentifier32;
  /**
   * Defines the intent of this API call. This determines the desired initial state of the
   * transaction.
   *
   * * `authorize` - (Default) Optionally approves and then authorizes a transaction but does not
   *   capture the funds.
   * * `capture` - Optionally approves and then authorizes and captures the funds of the
   *   transaction.
   */
  intent?: TransactionIntent4;
  /**
   * Whether or not to also try and store the payment method with us so that it can be used again
   * for future use. This is only supported for payment methods that support this feature. There are
   * also a few restrictions on how the flag may be set:
   *
   * * The flag has to be set to `true` when the `payment_source` is set to `recurring` or
   *   `installment`, and `merchant_initiated` is set to `false`.
   * * The flag has to be set to `false` (or not set) when using a previously vaulted payment
   *   method.
   *
   * @default false
   */
  store?: boolean;
  /**
   * Pass through 3-D Secure data to support external 3-D Secure authorisation. If using an external
   * 3-D Secure provider, you should not pass a `redirect_url` in the `payment_method` object for a
   * transaction.
   */
  threeDSecureData?: ThreeDSecureData;
  /** Optional 3-D Secure values to use during the authentication flow. */
  threeDSecure?: ThreeDSecure11;
  /**
   * Any additional information about the transaction that you would like to store as key-value
   * pairs. This data is passed to payment service providers that support it.
   */
  metadata?: Metadata;
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
   *
   * @default false
   */
  isSubsequentPayment?: boolean;
  /**
   * Indicates whether the transaction was initiated by the merchant (true) or customer (false).
   *
   * @default false
   */
  merchantInitiated?: boolean;
  /** The use-case for the the transaction. */
  paymentSource?: TransactionPaymentSource4;
  /**
   * The airline addendum data which describes the airline booking associated with this transaction.
   */
  airline?: Airline1;
  /**
   * An optional description for the transaction. Forwarded to the payment processor where
   * supported. Unlike `statement_descriptor`, this field has no character limit and does not appear
   * on the buyer's bank statement.
   */
  description?: Description6;
  /** An array of cart items that represents the line items of a transaction. */
  cartItems?: CartItems1;
  /**
   * Details about the payment and the merchant which may end up on the (bank) statement for the
   * payment.
   */
  statementDescriptor?: StatementDescriptor12;
  /**
   * A scheme's transaction identifier to use in connecting a merchant initiated transaction to a
   * previous customer initiated transaction. If not provided, and a qualifying customer initiated
   * transaction has been previously made with the stored payment method, then Gr4vy will populate
   * this value with the identifier returned for that transaction. This field is also know as the
   * Visa Transaction Identifier, or Mastercard Trace ID.
   */
  previousSchemeTransactionId?: PreviousSchemeTransactionId;
  /**
   * A scheme's transaction link identifier to use in connecting a merchant initiated transaction to
   * a previous customer initiated transaction. If not provided, and a qualifying customer initiated
   * transaction has been previously made with the stored payment method, then Gr4vy will populate
   * this value with the identifier returned for that transaction. This field is also know as the
   * Mastercard Transaction Link ID (TLID).
   */
  previousTransactionLinkId?: PreviousTransactionLinkId;
  /** Information about the browser used by the buyer. This can be used by anti-fraud services. */
  browserInfo?: BrowserInfo1;
  /**
   * The unique identifier of a set of shipping details stored for the buyer. If provided, the
   * created transaction will include a copy of the details at the point of transaction creation;
   * i.e. it will not be affected by later changes to the detail in the database.
   */
  shippingDetailsId?: ShippingDetailsId;
  /**
   * Allows for passing optional configuration per connection to take advantage of connection
   * specific features. When provided, the data is only passed to the target connection type to
   * prevent sharing configuration across connections. Please note that each of the keys this object
   * are in kebab-case, for example `cybersource-anti-fraud` as they represent the ID of the
   * connector. All the other keys will be snake case, for example `merchant_defined_data` or camel
   * case to match an external API that the connector uses.
   */
  connectionOptions?: ConnectionOptions2;
  /**
   * Whether to capture the transaction asynchronously when an authorization-capture split occurs.
   *
   * This flag is only used if the transaction flow is split between authorization and capture. The
   * split itself is not controlled by this flag and depends on other conditions, including delayed
   * capture support, direct capture support, card scheme, gift cards, and anti-fraud decision.
   *
   * - When `async_capture` is `false` (default) and applicable, the capture is attempted in the
   *   same request.
   * - When `async_capture` is `true` and applicable, the capture is performed outside the context
   *   of this request.
   *
   * Redirect transactions are not affected by this flag. This flag can only be set to `true` when
   * `intent` is set to `capture`. Please check the public documentation for full
   * authorization-capture split behavior details.
   *
   * @default false
   */
  asyncCapture?: boolean;
  /** This field represents the fingerprint data to be passed to the active anti-fraud service. */
  antiFraudFingerprint?: AntiFraudFingerprint;
  /**
   * The unique identifier of an existing payment service. When provided, the created transaction
   * will be processed by the given payment service and any routing rules will be skipped.
   */
  paymentServiceId?: PaymentServiceId;
  /**
   * Marks the transaction as an AFT. Requires the payment service to support this feature, and
   * might `recipient` and `buyer` data
   *
   * @default false
   */
  accountFundingTransaction?: boolean;
  /** Defines if the transaction will allow for a partial authorization. @default false */
  allowPartialAuthorization?: boolean;
  /** The recipient of any account to account funding. For use with AFTs. */
  recipient?: Recipient1;
  /** The number of installments a buyer is required to make. */
  installmentCount?: InstallmentCount;
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
  /**
   * Defines the client where the session for this transaction is going to be used. Please refer to
   * the connections documentation for more guidance.
   */
  integrationClient?: IntegrationClient11;
  /**
   * The date and time when the buyer's approval window for this transaction expires. If not
   * provided, this is automatically computed from the connector's default expiration time. The
   * value cannot exceed the connector's maximum approval window.
   */
  approvalExpiresAt?: ApprovalExpiresAt1;
  /** Whether the authorization amount is expected to be modified in the future or not. */
  isAmountEstimated?: IsAmountEstimated;
};

export const transactionCreateSchema: Schema<TransactionCreate> = s.object<TransactionCreate>({
  amount: s.int(),
  currency: s.string(),
  country: s.optional(s.lazy(() => country11Schema)),
  paymentMethod: s.optional(s.lazy(() => paymentMethod11Schema)),
  buyer: s.optional(s.lazy(() => buyer19Schema)),
  buyerId: s.optional(s.lazy(() => buyerId22Schema)),
  buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier19Schema)),
  giftCards: s.optional(s.lazy(() => giftCards1Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier32Schema)),
  intent: s.optional(s.lazy(() => transactionIntent4Schema)),
  store: s.defaulted(s.boolean(), false),
  threeDSecureData: s.optional(s.lazy(() => threeDSecureDataSchema)),
  threeDSecure: s.optional(s.lazy(() => threeDSecure11Schema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  isSubsequentPayment: s.defaulted(s.boolean(), false),
  merchantInitiated: s.defaulted(s.boolean(), false),
  paymentSource: s.optional(s.lazy(() => transactionPaymentSource4Schema)),
  airline: s.optional(s.lazy(() => airline1Schema)),
  description: s.optional(s.lazy(() => description6Schema)),
  cartItems: s.optional(s.lazy(() => cartItems1Schema)),
  statementDescriptor: s.optional(s.lazy(() => statementDescriptor12Schema)),
  previousSchemeTransactionId: s.optional(s.lazy(() => previousSchemeTransactionIdSchema)),
  previousTransactionLinkId: s.optional(s.lazy(() => previousTransactionLinkIdSchema)),
  browserInfo: s.optional(s.lazy(() => browserInfo1Schema)),
  shippingDetailsId: s.optional(s.lazy(() => shippingDetailsIdSchema)),
  connectionOptions: s.optional(s.lazy(() => connectionOptions2Schema)),
  asyncCapture: s.defaulted(s.boolean(), false),
  antiFraudFingerprint: s.optional(s.lazy(() => antiFraudFingerprintSchema)),
  paymentServiceId: s.optional(s.lazy(() => paymentServiceIdSchema)),
  accountFundingTransaction: s.defaulted(s.boolean(), false),
  allowPartialAuthorization: s.defaulted(s.boolean(), false),
  recipient: s.optional(s.lazy(() => recipient1Schema)),
  installmentCount: s.optional(s.lazy(() => installmentCountSchema)),
  taxAmount: s.optional(s.lazy(() => taxAmount2Schema)),
  merchantTaxId: s.optional(s.lazy(() => merchantTaxIdSchema)),
  purchaseOrderNumber: s.optional(s.lazy(() => purchaseOrderNumber1Schema)),
  customerReferenceNumber: s.optional(s.lazy(() => customerReferenceNumberSchema)),
  amountIncludesTax: s.optional(s.lazy(() => amountIncludesTaxSchema)),
  supplierOrderNumber: s.optional(s.lazy(() => supplierOrderNumberSchema)),
  dutyAmount: s.optional(s.lazy(() => dutyAmount1Schema)),
  shippingAmount: s.optional(s.lazy(() => shippingAmount1Schema)),
  integrationClient: s.optional(s.lazy(() => integrationClient11Schema)),
  approvalExpiresAt: s.optional(s.lazy(() => approvalExpiresAt1Schema)),
  isAmountEstimated: s.optional(s.lazy(() => isAmountEstimatedSchema)),
  _keysMap: {
    paymentMethod: "payment_method",
    buyerId: "buyer_id",
    buyerExternalIdentifier: "buyer_external_identifier",
    giftCards: "gift_cards",
    externalIdentifier: "external_identifier",
    threeDSecureData: "three_d_secure_data",
    threeDSecure: "three_d_secure",
    isSubsequentPayment: "is_subsequent_payment",
    merchantInitiated: "merchant_initiated",
    paymentSource: "payment_source",
    cartItems: "cart_items",
    statementDescriptor: "statement_descriptor",
    previousSchemeTransactionId: "previous_scheme_transaction_id",
    previousTransactionLinkId: "previous_transaction_link_id",
    browserInfo: "browser_info",
    shippingDetailsId: "shipping_details_id",
    connectionOptions: "connection_options",
    asyncCapture: "async_capture",
    antiFraudFingerprint: "anti_fraud_fingerprint",
    paymentServiceId: "payment_service_id",
    accountFundingTransaction: "account_funding_transaction",
    allowPartialAuthorization: "allow_partial_authorization",
    installmentCount: "installment_count",
    taxAmount: "tax_amount",
    merchantTaxId: "merchant_tax_id",
    purchaseOrderNumber: "purchase_order_number",
    customerReferenceNumber: "customer_reference_number",
    amountIncludesTax: "amount_includes_tax",
    supplierOrderNumber: "supplier_order_number",
    dutyAmount: "duty_amount",
    shippingAmount: "shipping_amount",
    integrationClient: "integration_client",
    approvalExpiresAt: "approval_expires_at",
    isAmountEstimated: "is_amount_estimated",
  },
});
