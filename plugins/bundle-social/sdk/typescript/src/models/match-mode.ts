import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MatchMode = {
  Any: "ANY",
  All: "ALL",
} as const;
export type MatchMode = (typeof MatchMode)[keyof typeof MatchMode] | (string & {});

export const matchModeSchema: EnumSchema<MatchMode> = s.enumOf<MatchMode>(MatchMode);
