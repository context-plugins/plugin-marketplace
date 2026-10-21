import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount65Schema, type Amount65 } from "./amount65.js";
import { paymentAddress3Schema, type PaymentAddress3 } from "./payment-address3.js";
import { paymentLineItemSchema, type PaymentLineItem } from "./payment-line-item.js";
import { paymentLinkMethodSchema, type PaymentLinkMethod } from "./payment-link-method.js";
import { shippingAddressSchema, type ShippingAddress } from "./shipping-address.js";

export type V2PaymentLinksRequest1 = {
  /**
   * A short description of the payment link. The description is visible in the Dashboard and will
   * be shown on the customer's bank or card statement when possible.
   *
   * Updating the description does not affect any previously existing payments created for this
   * payment link.
   */
  description?: string;
  /**
   * The minimum amount of the payment link. This property is only allowed when there is no amount
   * provided. The customer will be prompted to enter a value greater than or equal to the minimum
   * amount.
   */
  minimumAmount?: Amount65;
  /**
   * Whether the payment link is archived. Customers will not be able to complete payments on
   * archived payment links.
   */
  archived?: boolean;
  /**
   * An array of payment methods that are allowed to be used for this payment link. When this
   * parameter is not provided or is an empty array, all enabled payment methods will be available.
   */
  allowedMethods?: PaymentLinkMethod[] | null;
  /**
   * Optionally provide the order lines for the payment. Each line contains details such as a
   * description of the item ordered and its price.
   *
   * All lines must have the same currency as the payment.
   *
   * Required for payment methods `billie`, `in3`, `klarna`, `riverty` and `voucher`.
   */
  lines?: PaymentLineItem[] | null;
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
   * Whether the entity was created in test mode or live mode. This field does not update the mode
   * of the entity.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean;
};

export const v2PaymentLinksRequest1Schema: Schema<V2PaymentLinksRequest1> = s.object<V2PaymentLinksRequest1>({
  description: s.optional(s.string()),
  minimumAmount: s.optional(s.lazy(() => amount65Schema)),
  archived: s.optional(s.boolean()),
  allowedMethods: s.optionalNullable(s.array(s.lazy(() => paymentLinkMethodSchema))),
  lines: s.optionalNullable(s.array(s.lazy(() => paymentLineItemSchema))),
  billingAddress: s.optional(s.lazy(() => paymentAddress3Schema)),
  shippingAddress: s.optional(s.lazy(() => shippingAddressSchema)),
  testmode: s.optional(s.boolean()),
});
