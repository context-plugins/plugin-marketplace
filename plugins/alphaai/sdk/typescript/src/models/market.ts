import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Market = {
  All: "all",
  UsEquity: "us_equity",
  Crypto: "crypto",
  International: "international",
} as const;
export type Market = (typeof Market)[keyof typeof Market] | (string & {});

export const marketSchema: EnumSchema<Market> = s.enumOf<Market>(Market);
