import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Currencies = {
  Eur: "EUR",
  Gbp: "GBP",
  Chf: "CHF",
  Dkk: "DKK",
  Nok: "NOK",
  Pln: "PLN",
  Sek: "SEK",
  Usd: "USD",
  Czk: "CZK",
  Huf: "HUF",
  Aud: "AUD",
  Cad: "CAD",
  Ron: "RON",
} as const;
export type Currencies = (typeof Currencies)[keyof typeof Currencies] | (string & {});

export const currenciesSchema: EnumSchema<Currencies> = s.enumOf<Currencies>(Currencies);
