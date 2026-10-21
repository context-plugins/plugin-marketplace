import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullable11Schema, type AmountNullable11 } from "./amount-nullable11.js";
import { amountNullable12Schema, type AmountNullable12 } from "./amount-nullable12.js";
import { applicationFee3Schema, type ApplicationFee3 } from "./application-fee3.js";
import { links24Schema, type Links24 } from "./links24.js";
import { modeSchema, type Mode } from "./mode.js";
import { paymentAddress3Schema, type PaymentAddress3 } from "./payment-address3.js";
import { paymentLineItemResponseSchema, type PaymentLineItemResponse } from "./payment-line-item-response.js";
import {
  paymentLinkMethodResponseSchema,
  type PaymentLinkMethodResponse,
} from "./payment-link-method-response.js";
import {
  paymentLinkSequenceTypeResponse2Schema,
  type PaymentLinkSequenceTypeResponse2,
} from "./payment-link-sequence-type-response2.js";
import { shippingAddressSchema, type ShippingAddress } from "./shipping-address.js";

export type EntityPaymentLink = {
  /**
   * Indicates the response contains a payment link object. Will always contain the string
   * `payment-link` for this endpoint.
   */
  resource?: string;
  /**
   * The identifier uniquely referring to this payment link. Example: `pl_4Y0eZitmBnQ6IDoMqZQKh`.
   */
  id?: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode?: Mode;
  /**
   * A short description of the payment link. The description is visible in the Dashboard and will
   * be shown on the customer's bank or card statement when possible.
   */
  description?: string;
  /**
   * The amount of the payment link. If no amount is provided initially, the customer will be
   * prompted to enter an amount.
   */
  amount?: AmountNullable11 | null;
  /**
   * The minimum amount of the payment link. This property is only allowed when there is no amount
   * provided. The customer will be prompted to enter a value greater than or equal to the minimum
   * amount.
   */
  minimumAmount?: AmountNullable12 | null;
  /**
   * Whether the payment link is archived. Customers will not be able to complete payments on
   * archived payment links.
   */
  archived?: boolean;
  /**
   * The URL your customer will be redirected to after completing the payment process. If no
   * redirect URL is provided, the customer will be shown a generic message after completing the
   * payment.
   */
  redirectUrl?: string | null;
  /**
   * The webhook URL where we will send payment status updates to.
   *
   * The webhookUrl is optional, but without a webhook you will miss out on important status changes
   * to any payments resulting from the payment link.
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
   * Required for payment methods `billie`, `in3`, `klarna`, `riverty` and `voucher`.
   */
  lines?: PaymentLineItemResponse[] | null;
  /**
   * The customer's billing address details. We advise to provide these details to improve fraud
   * protection and conversion.
   *
   * Should include `email` or a valid postal address consisting of `streetAndNumber`, `postalCode`,
   * `city` and `country`.
   *
   * Required for payment method `in3`, `klarna`, `billie` and `riverty`.
   */
  billingAddress?: PaymentAddress3;
  /**
   * The customer's shipping address details. We advise to provide these details to improve fraud
   * protection and conversion.
   *
   * Should include `email` or a valid postal address consisting of `streetAndNumber`, `postalCode`,
   * `city` and `country`.
   */
  shippingAddress?: ShippingAddress;
  /**
   * The identifier referring to the [profile](get-profile) this entity belongs to.
   *
   * Most API credentials are linked to a single profile. In these cases the `profileId` must not be
   * sent in the creation request. For organization-level credentials such as OAuth access tokens
   * however, the `profileId` parameter is required.
   */
  profileId?: string | null;
  /**
   * Indicates whether the payment link is reusable. If this field is set to `true`, customers can
   * make multiple payments using the same link.
   *
   * If no value is specified, the field defaults to `false`, allowing only a single payment per
   * link.
   */
  reusable?: boolean | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt?: string;
  /** The date and time the payment link became paid, in ISO 8601 format. */
  paidAt?: string | null;
  /**
   * The date and time the payment link is set to expire, in ISO 8601 format. If no expiry date was
   * provided up front, the payment link will not expire automatically.
   */
  expiresAt?: string | null;
  /**
   * An array of payment methods that are allowed to be used for this payment link. When this
   * parameter is not provided or is an empty array, all enabled payment methods will be available.
   */
  allowedMethods?: PaymentLinkMethodResponse[] | null;
  /**
   * With Mollie Connect you can charge fees on payment links that your app is processing on behalf
   * of other Mollie merchants.
   *
   * If you use OAuth to create payment links on a connected merchant's account, you can charge a
   * fee using this `applicationFee` parameter. If a payment on the payment link succeeds, the fee
   * will be deducted from the merchant's balance and sent to your own account balance.
   */
  applicationFee?: ApplicationFee3;
  /**
   * If set to `first`, a payment mandate is established right after a payment is made by the
   * customer.
   *
   * Defaults to `oneoff`, which is a regular payment link and will not establish a mandate after
   * payment.
   *
   * The mandate ID can be retrieved by making a call to the [Payment Link Payments
   * Endpoint](get-payment-link-payments).
   */
  sequenceType?: PaymentLinkSequenceTypeResponse2;
  /**
   * **Only relevant when `sequenceType` is set to `first`**
   *
   * The ID of the [customer](get-customer) the payment link is being created for. If a value is not
   * provided, the customer will be required to input relevant information which will be used to
   * establish a mandate after the payment is made.
   */
  customerId?: string | null;
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
  links?: Links24;
};

export const entityPaymentLinkSchema: Schema<EntityPaymentLink> = s.object<EntityPaymentLink>({
  resource: s.optional(s.string()),
  id: s.optional(s.string()),
  mode: s.optional(s.lazy(() => modeSchema)),
  description: s.optional(s.string()),
  amount: s.optionalNullable(s.lazy(() => amountNullable11Schema)),
  minimumAmount: s.optionalNullable(s.lazy(() => amountNullable12Schema)),
  archived: s.optional(s.boolean()),
  redirectUrl: s.optionalNullable(s.string()),
  webhookUrl: s.optionalNullable(s.string()),
  lines: s.optionalNullable(s.array(s.lazy(() => paymentLineItemResponseSchema))),
  billingAddress: s.optional(s.lazy(() => paymentAddress3Schema)),
  shippingAddress: s.optional(s.lazy(() => shippingAddressSchema)),
  profileId: s.optionalNullable(s.string()),
  reusable: s.optionalNullable(s.boolean()),
  createdAt: s.optional(s.string()),
  paidAt: s.optionalNullable(s.string()),
  expiresAt: s.optionalNullable(s.string()),
  allowedMethods: s.optionalNullable(s.array(s.lazy(() => paymentLinkMethodResponseSchema))),
  applicationFee: s.optional(s.lazy(() => applicationFee3Schema)),
  sequenceType: s.optional(s.lazy(() => paymentLinkSequenceTypeResponse2Schema)),
  customerId: s.optionalNullable(s.string()),
  testmode: s.optionalNullable(s.boolean()),
  links: s.optional(s.lazy(() => links24Schema)),
  _keysMap: {
    links: "_links",
  },
});
