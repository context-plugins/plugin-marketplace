import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The card scheme for this 3DS configuration */
export const CardScheme2 = {
  Accel: "accel",
  Amex: "amex",
  Bancontact: "bancontact",
  CarteBancaire: "carte-bancaire",
  Cirrus: "cirrus",
  Culiance: "culiance",
  Dankort: "dankort",
  DinersClub: "diners-club",
  Discover: "discover",
  EftposAustralia: "eftpos-australia",
  Elo: "elo",
  Hipercard: "hipercard",
  Jcb: "jcb",
  Maestro: "maestro",
  Mastercard: "mastercard",
  Mir: "mir",
  Nyce: "nyce",
  Other: "other",
  Pulse: "pulse",
  Qcard: "qcard",
  Rupay: "rupay",
  Star: "star",
  Uatp: "uatp",
  Unionpay: "unionpay",
  Visa: "visa",
} as const;
export type CardScheme2 = (typeof CardScheme2)[keyof typeof CardScheme2] | (string & {});

export const cardScheme2Schema: EnumSchema<CardScheme2> = s.enumOf<CardScheme2>(CardScheme2);
