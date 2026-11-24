import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Segment = {
  BseEq: "BSE_EQ",
  NseEq: "NSE_EQ",
  NcdFo: "NCD_FO",
  BcdFo: "BCD_FO",
  NseFo: "NSE_FO",
  BseFo: "BSE_FO",
  BseMf: "BSE_MF",
  McxFo: "MCX_FO",
  NseCom: "NSE_COM",
} as const;
export type Segment = (typeof Segment)[keyof typeof Segment] | (string & {});

export const segmentSchema: EnumSchema<Segment> = s.enumOf<Segment>(Segment);
