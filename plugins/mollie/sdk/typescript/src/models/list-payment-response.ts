import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountCapturedSchema, type AmountCaptured } from "./amount-captured.js";
import { amountChargedBackSchema, type AmountChargedBack } from "./amount-charged-back.js";
import { amountRefundedSchema, type AmountRefunded } from "./amount-refunded.js";
import { amountRemainingSchema, type AmountRemaining } from "./amount-remaining.js";
import { amount15Schema, type Amount15 } from "./amount15.js";
import { applicationFee1Schema, type ApplicationFee1 } from "./application-fee1.js";
import { billingAddressSchema, type BillingAddress } from "./billing-address.js";
import { captureModeResponseSchema, type CaptureModeResponse } from "./capture-mode-response.js";
import {
  entityPaymentRouteResponseSchema,
  type EntityPaymentRouteResponse,
} from "./entity-payment-route-response.js";
import { line1Schema, type Line1 } from "./line1.js";
import { links49Schema, type Links49 } from "./links49.js";
import { locale2Schema, type Locale2 } from "./locale2.js";
import { methodResponse1Schema, type MethodResponse1 } from "./method-response1.js";
import { modeSchema, type Mode } from "./mode.js";
import { paymentDetailsSchema, type PaymentDetails } from "./payment-details.js";
import { paymentStatusSchema, type PaymentStatus } from "./payment-status.js";
import { sequenceTypeResponse1Schema, type SequenceTypeResponse1 } from "./sequence-type-response1.js";
import { shippingAddressSchema, type ShippingAddress } from "./shipping-address.js";
import { statusReasonSchema, type StatusReason } from "./status-reason.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";

export type ListPaymentResponse = {
  /**
   * Indicates the response contains a payment object. Will always contain the string `payment` for
   * this endpoint.
   */
  resource: string;
  /**
   * The identifier uniquely referring to this payment. Mollie assigns this identifier at payment
   * creation time. Mollie will always refer to the payment by this ID. Example:
   * `tr_5B8cwPMGnU6qLbRvo7qEZo`.
   */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * The description of the payment will be shown to your customer on their card or bank statement
   * when possible. We truncate the description automatically according to the limits of the used
   * payment method. The description is also visible in any exports you generate.
   *
   * We recommend you use a unique identifier so that you can always link the payment to the order
   * in your back office. This is particularly useful for bookkeeping.
   *
   * The maximum length of the description field differs per payment method, with the absolute
   * maximum being 255 characters. The API will not reject strings longer than the maximum length
   * but it will truncate them to fit.
   */
  description: string;
  /**
   * The amount that you want to charge, e.g. `{currency:"EUR", value:"1000.00"}` if you would want
   * to charge €1000.00.
   *
   * You can find the minimum and maximum amounts per payment method in our help center.
   * Additionally, they can be retrieved using the Get method endpoint.
   *
   * If a tip was added for a Point-of-Sale payment, the amount will be updated to reflect the
   * initial amount plus the tip amount.
   */
  amount: Amount15;
  amountRefunded?: AmountRefunded;
  amountRemaining?: AmountRemaining;
  amountCaptured?: AmountCaptured;
  amountChargedBack?: AmountChargedBack;
  /**
   * The URL your customer will be redirected to after the payment process.
   *
   * It could make sense for the redirectUrl to contain a unique identifier – like your order ID –
   * so you can show the right page referencing the order when your customer returns.
   *
   * The parameter is normally required, but can be omitted for recurring payments (`sequenceType:
   * recurring`) and for Apple Pay payments with an `applePayPaymentToken`.
   */
  redirectUrl?: string | null;
  /**
   * The URL your customer will be redirected to when the customer explicitly cancels the payment.
   * If this URL is not provided, the customer will be redirected to the `redirectUrl` instead — see
   * above.
   *
   * Mollie will always give you status updates via webhooks, including for the canceled status.
   * This parameter is therefore entirely optional, but can be useful when implementing a dedicated
   * customer-facing flow to handle payment cancellations.
   */
  cancelUrl?: string | null;
  /**
   * The webhook URL where we will send payment status updates to.
   *
   * The webhookUrl is optional, but without a webhook you will miss out on important status changes
   * to your payment.
   *
   * The webhookUrl must be reachable from Mollie's point of view, so you cannot use `localhost`. If
   * you want to use webhook during development on `localhost`, you must use a tool like ngrok to
   * have the webhooks delivered to your local machine.
   */
  webhookUrl?: string | null;
  /**
   * Optionally provide the order lines for the payment. Each line contains details such as a
   * description of the item ordered and its price.
   *
   * All lines must have the same currency as the payment.
   *
   * Required for payment methods `billie`, `billink`, `in3`, `klarna`, `riverty` and `voucher`.
   */
  lines?: Line1[] | null;
  /**
   * The customer's billing address details. We advise to provide these details to improve fraud
   * protection and conversion.
   *
   * Should include `email` or a valid postal address consisting of `streetAndNumber`, `postalCode`,
   * `city` and `country`.
   *
   * Required for payment method `alma`, `in3`, `klarna`, `billie`, `billink` and `riverty`.
   */
  billingAddress?: BillingAddress;
  /**
   * The customer's shipping address details. We advise to provide these details to improve fraud
   * protection and conversion.
   *
   * Should include `email` or a valid postal address consisting of `streetAndNumber`, `postalCode`,
   * `city` and `country`.
   */
  shippingAddress?: ShippingAddress;
  /**
   * Allows you to preset the language to be used in the hosted payment pages shown to the customer.
   * Setting a locale is highly recommended and will greatly improve your conversion rate. When this
   * parameter is omitted the browser language will be used instead if supported by the payment
   * method. You can provide any `xx_XX` format ISO 15897 locale, but our hosted payment pages
   * currently only support the specified languages.
   *
   * For bank transfer payments specifically, the locale will determine the target bank account the
   * customer has to transfer the money to. We have dedicated bank accounts for Belgium, Germany,
   * and The Netherlands. Having the customer use a local bank account greatly increases the
   * conversion and speed of payment.
   */
  locale?: Locale2 | null;
  /**
   * This optional field contains your customer's ISO 3166-1 alpha-2 country code, detected by us
   * during checkout. This field is omitted if the country code was not detected.
   */
  countryCode?: string | null;
  /**
   * The payment method used for this transaction. If a specific method was selected during payment
   * initialization, this field reflects that choice.
   */
  method?: MethodResponse1 | null;
  /**
   * **Only relevant for iDEAL, KBC/CBC, gift card, and voucher payments.**
   *
   * **⚠️ With the introduction of iDEAL 2 in 2025, this field will be ignored for iDEAL payments.
   * For more information on the migration, refer to our [help
   * center](https://help.mollie.com/hc/articles/19100313768338-iDEAL-2-0).**
   *
   * Some payment methods are a network of connected banks or card issuers. In these cases, after
   * selecting the payment method, the customer may still need to select the appropriate issuer
   * before the payment can proceed.
   *
   * We provide hosted issuer selection screens, but these screens can be skipped by providing the
   * `issuer` via the API up front.
   *
   * The full list of issuers for a specific method can be retrieved via the Methods API by using
   * the optional `issuers` include.
   *
   * A valid issuer for iDEAL is for example `ideal_INGBNL2A` (for ING Bank).
   */
  issuer?: string | null;
  /**
   * For digital goods in most jurisdictions, you must apply the VAT rate from your customer's
   * country. Choose the VAT rates you have used for the order to ensure your customer's country
   * matches the VAT country.
   *
   * Use this parameter to restrict the payment methods available to your customer to those from a
   * single country.
   *
   * If available, the credit card method will still be offered, but only cards from the allowed
   * country are accepted.
   *
   * The field expects a country code in ISO 3166-1 alpha-2 format, for example `NL`.
   */
  restrictPaymentMethodsToCountry?: string | null;
  /**
   * Provide any data you like, for example a string or a JSON object. We will save the data
   * alongside the entity. Whenever you fetch the entity with our API, we will also include the
   * metadata. You can use up to approximately 1kB.
   */
  metadata?: Metadata | null;
  /**
   * Indicate if the funds should be captured immediately or if you want to [place a
   * hold](https://docs.mollie.com/docs/place-a-hold-for-a-payment#/) and capture at a later time.
   *
   * This field needs to be set to `manual` for method `riverty`.
   */
  captureMode?: CaptureModeResponse | null;
  /**
   * **Only relevant if you wish to manage authorization and capturing separately.**
   *
   * Some payment methods allow placing a hold on the card or bank account. This hold or
   * 'authorization' can then at a later point either be 'captured' or canceled.
   *
   * By default, we charge the customer's card or bank account immediately when they complete the
   * payment. If you set a capture delay however, we will delay the automatic capturing of the
   * payment for the specified amount of time. For example `8 hours` or `2 days`.
   *
   * To schedule an automatic capture, the `captureMode` must be set to `automatic`.
   *
   * The maximum delay is 7 days (168 hours).
   *
   * Possible values: `... hours` `... days`
   */
  captureDelay?: string | null;
  /**
   * Indicates the date before which the payment needs to be captured, in ISO 8601 format. From this
   * date onwards we can no longer guarantee a successful capture. The parameter is omitted if the
   * payment is not authorized (yet).
   */
  captureBefore?: string | null;
  /**
   * With Mollie Connect you can charge fees on payments that your app is processing on behalf of
   * other Mollie merchants.
   *
   * If you use OAuth to create payments on a connected merchant's account, you can charge a fee
   * using this `applicationFee` parameter. If the payment succeeds, the fee will be deducted from
   * the merchant's balance and sent to your own account balance.
   *
   * If instead you want to split a payment on your own account between yourself and a connected
   * merchant, refer to the `routing` parameter.
   */
  applicationFee?: ApplicationFee1 | null;
  /**
   * *This functionality is not enabled by default. Reach out to our partner management team if you
   * wish to use it.*
   *
   * With Mollie Connect you can charge fees on payments that your app is processing on behalf of
   * other Mollie merchants.
   *
   * If you create payments on your own account that you want to split between yourself and one or
   * more connected merchants, you can use this `routing` parameter to route the payment
   * accordingly.
   *
   * The `routing` parameter should contain an array of objects, with each object describing the
   * destination for a specific portion of the payment.
   *
   * It is not necessary to indicate in the array which portion goes to yourself. After all portions
   * of the total payment amount have been routed, the amount left will be routed to the current
   * organization automatically.
   *
   * If instead you use OAuth to create payments on a connected merchant's account, refer to the
   * `applicationFee` parameter.
   */
  routing?: EntityPaymentRouteResponse[] | null;
  /**
   * **Only relevant for recurring payments.**
   *
   * Indicate which part of a recurring sequence this payment is for.
   *
   * Recurring payments can only take place if a mandate is available. A common way to establish
   * such a mandate is through a `first` payment. With a `first` payment, the customer agrees to
   * automatic recurring charges taking place on their account in the future.
   *
   * If set to `recurring`, the customer's card is charged automatically.
   *
   * Defaults to `oneoff`, which is a regular non-recurring payment.
   *
   * For PayPal payments, recurring is only possible if your connected PayPal account allows it. You
   * can call our [Methods API](list-methods) with parameter `sequenceType: first` to discover which
   * payment methods on your account are set up correctly for recurring payments.
   */
  sequenceType: SequenceTypeResponse1;
  /**
   * If the payment was automatically created via a subscription, the ID of the
   * [subscription](get-subscription) will be added to the response.
   */
  subscriptionId?: string | null;
  /**
   * **Only relevant for recurring payments and stored cards.**
   *
   * When creating recurring or stored cards payments, the ID of a specific [mandate](get-mandate)
   * can be supplied to indicate which of the customer's accounts should be debited.
   */
  mandateId?: string | null;
  /**
   * The ID of the [customer](get-customer) the payment is being created for. This is used primarily
   * for recurring payments, but can also be used on regular payments to enable single-click
   * payments.
   *
   * If `sequenceType` is set to `recurring`, this field is required.
   */
  customerId?: string;
  /**
   * The identifier referring to the [profile](get-profile) this entity belongs to.
   *
   * When using an API Key, the `profileId` must not be sent since it is linked to the key. However,
   * for OAuth and Organization tokens, the `profileId` is required.
   *
   * For more information, see [Authentication](authentication).
   */
  profileId: string;
  /** The identifier referring to the [settlement](get-settlement) this payment was settled with. */
  settlementId?: string | null;
  /**
   * If the payment was created for an [order](get-order), the ID of that order will be part of the
   * response.
   */
  orderId?: string | null;
  status: PaymentStatus;
  /**
   * This object offers details about the status of a payment. Currently it is only available for
   * point-of-sale payments.
   *
   * You can find more information about the possible values of this object on [this
   * page](status-reasons).**
   */
  statusReason?: StatusReason | null;
  /**
   * Whether the payment can be canceled. This parameter is omitted if the payment reaches a final
   * state.
   */
  isCancelable?: boolean | null;
  /**
   * An object containing payment details collected during the payment process. For example, details
   * may include the customer's card or bank details and a payment reference. For the full list of
   * details, please refer to the [method-specific parameters](extra-payment-parameters) guide.
   */
  details?: PaymentDetails | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * The date and time the payment became authorized, in ISO 8601 format. This parameter is omitted
   * if the payment is not authorized (yet).
   */
  authorizedAt?: string | null;
  /**
   * The date and time the payment became paid, in ISO 8601 format. This parameter is omitted if the
   * payment is not completed (yet).
   */
  paidAt?: string | null;
  /**
   * The date and time the payment was canceled, in ISO 8601 format. This parameter is omitted if
   * the payment is not canceled (yet).
   */
  canceledAt?: string | null;
  /**
   * The date and time the payment will expire, in ISO 8601 format. This parameter is omitted if the
   * payment can no longer expire.
   */
  expiresAt?: string | null;
  /**
   * The date and time the payment was expired, in ISO 8601 format. This parameter is omitted if the
   * payment did not expire (yet).
   */
  expiredAt?: string | null;
  /**
   * The date and time the payment failed, in ISO 8601 format. This parameter is omitted if the
   * payment did not fail (yet).
   */
  failedAt?: string | null;
  /**
   * The date by which the payment should be completed in `YYYY-MM-DD` format. Sending `null` has
   * the same effect as omitting the field.
   */
  dueDate?: string | null;
  /**
   * Whether the card details should be stored for the customer after a successful payment. This
   * will create a mandate for the customer, allowing for future customer present saved-card CIT
   * payments. Requires customerId, cardToken, and the creditcard method to be specified.
   */
  storeCredentials?: boolean;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links49;
};

export const listPaymentResponseSchema: Schema<ListPaymentResponse> = s.object<ListPaymentResponse>({
  resource: s.string(),
  id: s.string(),
  mode: modeSchema,
  description: s.string(),
  amount: amount15Schema,
  amountRefunded: s.optional(s.lazy(() => amountRefundedSchema)),
  amountRemaining: s.optional(s.lazy(() => amountRemainingSchema)),
  amountCaptured: s.optional(s.lazy(() => amountCapturedSchema)),
  amountChargedBack: s.optional(s.lazy(() => amountChargedBackSchema)),
  redirectUrl: s.optionalNullable(s.string()),
  cancelUrl: s.optionalNullable(s.string()),
  webhookUrl: s.optionalNullable(s.string()),
  lines: s.optionalNullable(s.array(s.lazy(() => line1Schema))),
  billingAddress: s.optional(s.lazy(() => billingAddressSchema)),
  shippingAddress: s.optional(s.lazy(() => shippingAddressSchema)),
  locale: s.optionalNullable(s.lazy(() => locale2Schema)),
  countryCode: s.optionalNullable(s.string()),
  method: s.optionalNullable(s.lazy(() => methodResponse1Schema)),
  issuer: s.optionalNullable(s.string()),
  restrictPaymentMethodsToCountry: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.lazy(() => metadataSchema)),
  captureMode: s.optionalNullable(s.lazy(() => captureModeResponseSchema)),
  captureDelay: s.optionalNullable(s.string()),
  captureBefore: s.optionalNullable(s.string()),
  applicationFee: s.optionalNullable(s.lazy(() => applicationFee1Schema)),
  routing: s.optionalNullable(s.array(s.lazy(() => entityPaymentRouteResponseSchema))),
  sequenceType: sequenceTypeResponse1Schema,
  subscriptionId: s.optionalNullable(s.string()),
  mandateId: s.optionalNullable(s.string()),
  customerId: s.optional(s.string()),
  profileId: s.string(),
  settlementId: s.optionalNullable(s.string()),
  orderId: s.optionalNullable(s.string()),
  status: paymentStatusSchema,
  statusReason: s.optionalNullable(s.lazy(() => statusReasonSchema)),
  isCancelable: s.optionalNullable(s.boolean()),
  details: s.optionalNullable(s.lazy(() => paymentDetailsSchema)),
  createdAt: s.string(),
  authorizedAt: s.optionalNullable(s.string()),
  paidAt: s.optionalNullable(s.string()),
  canceledAt: s.optionalNullable(s.string()),
  expiresAt: s.optionalNullable(s.string()),
  expiredAt: s.optionalNullable(s.string()),
  failedAt: s.optionalNullable(s.string()),
  dueDate: s.optionalNullable(s.string()),
  storeCredentials: s.optional(s.boolean()),
  testmode: s.optionalNullable(s.boolean()),
  links: links49Schema,
  _keysMap: {
    links: "_links",
  },
});
