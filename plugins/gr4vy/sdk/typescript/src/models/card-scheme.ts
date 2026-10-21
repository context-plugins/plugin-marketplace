import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CardScheme = {
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
export type CardScheme = (typeof CardScheme)[keyof typeof CardScheme] | (string & {});

export const cardSchemeSchema: EnumSchema<CardScheme> = s.enumOf<CardScheme>(CardScheme);
