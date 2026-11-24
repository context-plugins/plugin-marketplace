import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The continent to retrieve analytics for. */
export const ContinentCode = {
  Af: "AF",
  An: "AN",
  As: "AS",
  Eu: "EU",
  Na: "NA",
  Oc: "OC",
  Sa: "SA",
} as const;
export type ContinentCode = (typeof ContinentCode)[keyof typeof ContinentCode] | (string & {});

export const continentCodeSchema: EnumSchema<ContinentCode> = s.enumOf<ContinentCode>(ContinentCode);
