import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TierPriceCurrency = {
  Usd: "usd",
  Aud: "aud",
  Cad: "cad",
  Eur: "eur",
  Gbp: "gbp",
  Inr: "inr",
  Brl: "brl",
  Mxn: "mxn",
  Nzd: "nzd",
  Dkk: "dkk",
} as const;
export type TierPriceCurrency = (typeof TierPriceCurrency)[keyof typeof TierPriceCurrency] | (string & {});

export const tierPriceCurrencySchema: EnumSchema<TierPriceCurrency> =
  s.enumOf<TierPriceCurrency>(TierPriceCurrency);
