import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Coverage = {
  LastFunding: "last_funding",
  AnyRound: "any_round",
  TotalFunds: "total_funds",
  LastRound: "last_round",
} as const;
export type Coverage = (typeof Coverage)[keyof typeof Coverage] | (string & {});

export const coverageSchema: EnumSchema<Coverage> = s.enumOf<Coverage>(Coverage);
