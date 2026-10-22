import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the matching method based on the format and logic used in the lookup file */
export const MatchMode = {
  Exact: "exact",
  Cidr: "cidr",
  Regex: "regex",
} as const;
export type MatchMode = (typeof MatchMode)[keyof typeof MatchMode] | (string & {});

export const matchModeSchema: EnumSchema<MatchMode> = s.enumOf<MatchMode>(MatchMode);
