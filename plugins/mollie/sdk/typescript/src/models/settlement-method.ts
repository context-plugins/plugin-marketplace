import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method the cost or revenue subtotal applies to. This is usually a payment method, but can
 * also represent a correction or transaction type that is not tied to a specific payment method.
 */
export const SettlementMethod = {
  Alma: "alma",
  Applicationfee: "applicationfee",
  Authorizationreversal: "authorizationreversal",
  Bacs: "bacs",
  Bancomatpay: "bancomatpay",
  Bancontact: "bancontact",
  Banktransfer: "banktransfer",
  Belfius: "belfius",
  Billie: "billie",
  Billink: "billink",
  Bitcoin: "bitcoin",
  Bizum: "bizum",
  Blik: "blik",
  Capture: "capture",
  Chargeback: "chargeback",
  Creditcard: "creditcard",
  Directdebit: "directdebit",
  Eps: "eps",
  Giftcard: "giftcard",
  Giropay: "giropay",
  Ideal: "ideal",
  In3: "in3",
  Inghomepay: "inghomepay",
  Kbc: "kbc",
  Kickback: "kickback",
  Klarna: "klarna",
  Klarnapaylater: "klarnapaylater",
  Klarnapaynow: "klarnapaynow",
  Klarnasliceit: "klarnasliceit",
  Mbway: "mbway",
  Mobilepay: "mobilepay",
  Multibanco: "multibanco",
  Mybank: "mybank",
  Paybybank: "paybybank",
  Paypal: "paypal",
  Paysafecard: "paysafecard",
  Podiumcadeaukaart: "podiumcadeaukaart",
  Pointofsale: "pointofsale",
  Przelewy24: "przelewy24",
  Refund: "refund",
  Riverty: "riverty",
  Rollingreserve: "rollingreserve",
  Satispay: "satispay",
  Shiftedfee: "shiftedfee",
  Sofort: "sofort",
  Swish: "swish",
  Trustly: "trustly",
  Twint: "twint",
  Vipps: "vipps",
  Voucher: "voucher",
  Wero: "wero",
} as const;
export type SettlementMethod = (typeof SettlementMethod)[keyof typeof SettlementMethod] | (string & {});

export const settlementMethodSchema: EnumSchema<SettlementMethod> =
  s.enumOf<SettlementMethod>(SettlementMethod);
