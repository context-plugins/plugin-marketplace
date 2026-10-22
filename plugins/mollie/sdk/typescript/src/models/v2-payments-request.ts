import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingAddressSchema, type BillingAddress } from "./billing-address.js";
import { locale2Schema, type Locale2 } from "./locale2.js";
import { shippingAddressSchema, type ShippingAddress } from "./shipping-address.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { methodRequestSchema, type MethodRequest } from "./unions/method-request.js";

export type V2PaymentsRequest = {
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
  description?: string;
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
   * Provide any data you like, for example a string or a JSON object. We will save the data
   * alongside the entity. Whenever you fetch the entity with our API, we will also include the
   * metadata. You can use up to approximately 1kB.
   */
  metadata?: Metadata | null;
  /**
   * Normally, a payment method screen is shown. However, when using this parameter, you can choose
   * a specific payment method and your customer will skip the selection screen and is sent directly
   * to the chosen payment method. The parameter enables you to fully integrate the payment method
   * selection into your website.
   *
   * You can also specify the methods in an array. By doing so we will still show the payment method
   * selection screen but will only show the methods specified in the array. For example, you can
   * use this functionality to only show payment methods from a specific country to your customer
   * `['bancontact', 'belfius']`.
   */
  method?: MethodRequest;
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
   * The date by which the payment should be completed in `YYYY-MM-DD` format. Sending `null` has
   * the same effect as omitting the field.
   */
  dueDate?: string | null;
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
   * Whether the entity was created in test mode or live mode. This field does not update the mode
   * of the entity.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean;
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
  billingEmail?: string;
};

export const v2PaymentsRequestSchema: Schema<V2PaymentsRequest> = s.object<V2PaymentsRequest>({
  description: s.optional(s.string()),
  redirectUrl: s.optionalNullable(s.string()),
  cancelUrl: s.optionalNullable(s.string()),
  webhookUrl: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.lazy(() => metadataSchema)),
  method: s.optional(s.lazy(() => methodRequestSchema)),
  locale: s.optionalNullable(s.lazy(() => locale2Schema)),
  dueDate: s.optionalNullable(s.string()),
  restrictPaymentMethodsToCountry: s.optionalNullable(s.string()),
  testmode: s.optional(s.boolean()),
  issuer: s.optionalNullable(s.string()),
  billingAddress: s.optional(s.lazy(() => billingAddressSchema)),
  shippingAddress: s.optional(s.lazy(() => shippingAddressSchema)),
  billingEmail: s.optional(s.string()),
});
