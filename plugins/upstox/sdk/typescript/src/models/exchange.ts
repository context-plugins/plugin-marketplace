import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Exchange = {
  Nse: "NSE",
  Nfo: "NFO",
  Cds: "CDS",
  Bse: "BSE",
  Bfo: "BFO",
  Bcd: "BCD",
  Mcx: "MCX",
  Nscom: "NSCOM",
} as const;
export type Exchange = (typeof Exchange)[keyof typeof Exchange] | (string & {});

export const exchangeSchema: EnumSchema<Exchange> = s.enumOf<Exchange>(Exchange);
