import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to combine rules: 'all' (AND) or 'any' (OR). */
export const Match = {
  All: "all",
  Any: "any",
} as const;
export type Match = (typeof Match)[keyof typeof Match] | (string & {});

export const matchSchema: EnumSchema<Match> = s.enumOf<Match>(Match);
