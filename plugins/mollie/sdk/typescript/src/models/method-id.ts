import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Normally, a payment method screen is shown. However, when using this parameter, you can choose a
 * specific payment method and your customer will skip the selection screen and is sent directly to
 * the chosen payment method. The parameter enables you to fully integrate the payment method
 * selection into your website.
 *
 * You can also specify the methods in an array. By doing so we will still show the payment method
 * selection screen but will only show the methods specified in the array. For example, you can use
 * this functionality to only show payment methods from a specific country to your customer
 * `['bancontact', 'belfius']`.
 */
export const MethodId = {
  Alma: "alma",
  Applepay: "applepay",
  Bacs: "bacs",
  Bancomatpay: "bancomatpay",
  Bancontact: "bancontact",
  Banktransfer: "banktransfer",
  Belfius: "belfius",
  Billie: "billie",
  Billink: "billink",
  Bizum: "bizum",
  Blik: "blik",
  Creditcard: "creditcard",
  Directdebit: "directdebit",
  Eps: "eps",
  Giftcard: "giftcard",
  Googlepay: "googlepay",
  Ideal: "ideal",
  In3: "in3",
  Kbc: "kbc",
  Klarna: "klarna",
  Mbway: "mbway",
  Mobilepay: "mobilepay",
  Multibanco: "multibanco",
  Mybank: "mybank",
  Paybybank: "paybybank",
  Paypal: "paypal",
  Paysafecard: "paysafecard",
  Przelewy24: "przelewy24",
  Riverty: "riverty",
  Satispay: "satispay",
  Swish: "swish",
  Trustly: "trustly",
  Twint: "twint",
  Vipps: "vipps",
  Voucher: "voucher",
  Wero: "wero",
} as const;
export type MethodId = (typeof MethodId)[keyof typeof MethodId] | (string & {});

export const methodIdSchema: EnumSchema<MethodId> = s.enumOf<MethodId>(MethodId);
