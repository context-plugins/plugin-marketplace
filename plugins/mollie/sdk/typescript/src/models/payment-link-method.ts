import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentLinkMethod = {
  Applepay: "applepay",
  Bacs: "bacs",
  Bancomatpay: "bancomatpay",
  Bancontact: "bancontact",
  Banktransfer: "banktransfer",
  Belfius: "belfius",
  Billie: "billie",
  Blik: "blik",
  Creditcard: "creditcard",
  Eps: "eps",
  Giftcard: "giftcard",
  Googlepay: "googlepay",
  Ideal: "ideal",
  In3: "in3",
  Kbc: "kbc",
  Klarna: "klarna",
  Mbway: "mbway",
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
  Voucher: "voucher",
  Wero: "wero",
} as const;
export type PaymentLinkMethod = (typeof PaymentLinkMethod)[keyof typeof PaymentLinkMethod] | (string & {});

export const paymentLinkMethodSchema: EnumSchema<PaymentLinkMethod> =
  s.enumOf<PaymentLinkMethod>(PaymentLinkMethod);
