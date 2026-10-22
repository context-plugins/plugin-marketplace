import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The card scheme/network. */
export const CardScheme4 = {
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
export type CardScheme4 = (typeof CardScheme4)[keyof typeof CardScheme4] | (string & {});

export const cardScheme4Schema: EnumSchema<CardScheme4> = s.enumOf<CardScheme4>(CardScheme4);
