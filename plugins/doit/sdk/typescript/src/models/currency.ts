import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Currency code for monetary values. */
export const Currency = {
  Usd: "USD",
  Ils: "ILS",
  Eur: "EUR",
  Aud: "AUD",
  Cad: "CAD",
  Gbp: "GBP",
  Dkk: "DKK",
  Nok: "NOK",
  Sek: "SEK",
  Brl: "BRL",
  Sgd: "SGD",
  Mxn: "MXN",
  Chf: "CHF",
  Myr: "MYR",
  Twd: "TWD",
  Egp: "EGP",
  Zar: "ZAR",
  Jpy: "JPY",
  Idr: "IDR",
  Aed: "AED",
  Thb: "THB",
  Cop: "COP",
} as const;
export type Currency = (typeof Currency)[keyof typeof Currency] | (string & {});

export const currencySchema: EnumSchema<Currency> = s.enumOf<Currency>(Currency);
