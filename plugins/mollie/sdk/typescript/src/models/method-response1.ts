import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The payment method used for this transaction. If a specific method was selected during payment
 * initialization, this field reflects that choice.
 */
export const MethodResponse1 = {
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
  Pointofsale: "pointofsale",
  Przelewy24: "przelewy24",
  Riverty: "riverty",
  Satispay: "satispay",
  Swish: "swish",
  Trustly: "trustly",
  Twint: "twint",
  Vipps: "vipps",
  Voucher: "voucher",
  Wero: "wero",
  Klarnapaylater: "klarnapaylater",
  Klarnapaynow: "klarnapaynow",
  Klarnasliceit: "klarnasliceit",
  Payconiq: "payconiq",
} as const;
export type MethodResponse1 = (typeof MethodResponse1)[keyof typeof MethodResponse1] | (string & {});

export const methodResponse1Schema: EnumSchema<MethodResponse1> = s.enumOf<MethodResponse1>(MethodResponse1);
