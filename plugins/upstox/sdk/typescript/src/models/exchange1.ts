import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Exchange to which the order is associated */
export const Exchange1 = {
  Nse: "NSE",
  Nfo: "NFO",
  Cds: "CDS",
  Bse: "BSE",
  Bfo: "BFO",
  Bcd: "BCD",
  Mcx: "MCX",
  Nscom: "NSCOM",
} as const;
export type Exchange1 = (typeof Exchange1)[keyof typeof Exchange1] | (string & {});

export const exchange1Schema: EnumSchema<Exchange1> = s.enumOf<Exchange1>(Exchange1);
