import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The card's label, if known. */
export const PaymentDetailsCardLabelResponse = {
  AmericanExpress: "American Express",
  CartaSi: "Carta Si",
  CarteBleue: "Carte Bleue",
  CartesBancaires: "Cartes Bancaires",
  Dankort: "Dankort",
  DinersClub: "Diners Club",
  Discover: "Discover",
  Jcb: "JCB",
  Laser: "Laser",
  Maestro: "Maestro",
  Mastercard: "Mastercard",
  Unionpay: "Unionpay",
  Visa: "Visa",
  Vpay: "Vpay",
} as const;
export type PaymentDetailsCardLabelResponse =
  | (typeof PaymentDetailsCardLabelResponse)[keyof typeof PaymentDetailsCardLabelResponse]
  | (string & {});

export const paymentDetailsCardLabelResponseSchema: EnumSchema<PaymentDetailsCardLabelResponse> =
  s.enumOf<PaymentDetailsCardLabelResponse>(PaymentDetailsCardLabelResponse);
