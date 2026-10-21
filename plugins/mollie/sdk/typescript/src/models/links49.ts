import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlNullable4Schema, type UrlNullable4 } from "./url-nullable4.js";
import { urlSchema, type Url } from "./url.js";
import { url10Schema, type Url10 } from "./url10.js";
import { url11Schema, type Url11 } from "./url11.js";
import { url12Schema, type Url12 } from "./url12.js";
import { url13Schema, type Url13 } from "./url13.js";
import { url14Schema, type Url14 } from "./url14.js";
import { url15Schema, type Url15 } from "./url15.js";
import { url16Schema, type Url16 } from "./url16.js";
import { url17Schema, type Url17 } from "./url17.js";
import { url18Schema, type Url18 } from "./url18.js";
import { url19Schema, type Url19 } from "./url19.js";
import { url20Schema, type Url20 } from "./url20.js";
import { url7Schema, type Url7 } from "./url7.js";
import { url8Schema, type Url8 } from "./url8.js";
import { url9Schema, type Url9 } from "./url9.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links49 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /**
   * The URL your customer should visit to make the payment. This is where you should redirect the
   * customer to.
   */
  checkout?: Url7;
  /**
   * The deeplink URL to the app of the payment method. Currently only available for `bancontact`.
   */
  mobileAppCheckout?: Url8;
  /**
   * For test mode payments in certain scenarios, a hosted interface is available to help you test
   * different payment states.
   *
   * Firstly, for recurring test mode payments. Recurring payments do not have a checkout URL,
   * because these payments are executed without any user interaction.
   *
   * Secondly, for paid test mode payments. The payment state screen will then allow you to create a
   * refund or chargeback for the test payment.
   */
  changePaymentState?: UrlNullable4 | null;
  /** Direct link to the payment in the Mollie Dashboard. */
  dashboard: Url9;
  /** The API resource URL of the [refunds](list-payment-refunds) that belong to this payment. */
  refunds?: Url10;
  /**
   * The API resource URL of the [chargebacks](list-payment-chargebacks) that belong to this
   * payment.
   */
  chargebacks?: Url11;
  /** The API resource URL of the [captures](list-payment-captures) that belong to this payment. */
  captures?: Url12;
  /**
   * The API resource URL of the [settlement](get-settlement) this payment has been settled with.
   * Not present if not yet settled.
   */
  settlement?: Url13;
  /** The API resource URL of the [customer](get-customer). */
  customer?: Url14;
  /** The API resource URL of the [mandate](get-mandate). */
  mandate?: Url15;
  /** The API resource URL of the [subscription](get-subscription). */
  subscription?: Url16;
  /**
   * The API resource URL of the [order](get-order) this payment was created for. Not present if not
   * created for an order.
   */
  order?: Url17;
  /**
   * The API resource URL of the [terminal](get-terminal) this payment was created for. Only present
   * for point-of-sale payments.
   */
  terminal?: Url18;
  /**
   * Link to customer-facing page showing the status of the bank transfer (to verify if the
   * transaction was successful).
   */
  status?: Url19;
  /**
   * Link to Mollie Checkout page allowing customers to select a different payment method instead of
   * legacy bank transfer.
   */
  payOnline?: Url20;
};

export const links49Schema: Schema<Links49> = s.object<Links49>({
  self: urlSchema,
  checkout: s.optional(s.lazy(() => url7Schema)),
  mobileAppCheckout: s.optional(s.lazy(() => url8Schema)),
  changePaymentState: s.optionalNullable(s.lazy(() => urlNullable4Schema)),
  dashboard: url9Schema,
  refunds: s.optional(s.lazy(() => url10Schema)),
  chargebacks: s.optional(s.lazy(() => url11Schema)),
  captures: s.optional(s.lazy(() => url12Schema)),
  settlement: s.optional(s.lazy(() => url13Schema)),
  customer: s.optional(s.lazy(() => url14Schema)),
  mandate: s.optional(s.lazy(() => url15Schema)),
  subscription: s.optional(s.lazy(() => url16Schema)),
  order: s.optional(s.lazy(() => url17Schema)),
  terminal: s.optional(s.lazy(() => url18Schema)),
  status: s.optional(s.lazy(() => url19Schema)),
  payOnline: s.optional(s.lazy(() => url20Schema)),
});
