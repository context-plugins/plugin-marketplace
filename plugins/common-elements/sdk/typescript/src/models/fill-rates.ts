import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FillRates = {
  _0: "0",
  _1: "1",
} as const;
export type FillRates = (typeof FillRates)[keyof typeof FillRates] | (string & {});

export const fillRatesSchema: EnumSchema<FillRates> = s.enumOf<FillRates>(FillRates);
