import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code2 = {
  BadRequest: "bad_request",
  MissingParam: "missing_param",
  RegionRequired: "region_required",
  UnknownSport: "unknown_sport",
  UnknownMarket: "unknown_market",
  UnknownBookmaker: "unknown_bookmaker",
  UnknownExchange: "unknown_exchange",
} as const;
export type Code2 = (typeof Code2)[keyof typeof Code2] | (string & {});

export const code2Schema: EnumSchema<Code2> = s.enumOf<Code2>(Code2);
