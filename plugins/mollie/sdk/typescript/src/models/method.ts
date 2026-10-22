import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Method = {
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
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
