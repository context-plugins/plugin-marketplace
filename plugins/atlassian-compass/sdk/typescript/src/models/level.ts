import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The severity level. A severity level of 'ONE' is the most severe, and a level of 'FIVE' is the
 * least severe.
 */
export const Level = {
  One: "ONE",
  Two: "TWO",
  Three: "THREE",
  Four: "FOUR",
  Five: "FIVE",
} as const;
export type Level = (typeof Level)[keyof typeof Level] | (string & {});

export const levelSchema: EnumSchema<Level> = s.enumOf<Level>(Level);
