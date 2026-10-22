import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The card's label. Available for card mandates, if the card label could be detected. */
export const MandateDetailsCardLabel = {
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
} as const;
export type MandateDetailsCardLabel =
  | (typeof MandateDetailsCardLabel)[keyof typeof MandateDetailsCardLabel]
  | (string & {});

export const mandateDetailsCardLabelSchema: EnumSchema<MandateDetailsCardLabel> =
  s.enumOf<MandateDetailsCardLabel>(MandateDetailsCardLabel);
