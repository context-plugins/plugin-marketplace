import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Target summary size: "short" (1-2 sentences), "medium" (one paragraph, the default) or "long" (a
 * few short paragraphs).
 */
export const Length1 = {
  Short: "short",
  Medium: "medium",
  Long: "long",
} as const;
export type Length1 = (typeof Length1)[keyof typeof Length1] | (string & {});

export const length1Schema: EnumSchema<Length1> = s.enumOf<Length1>(Length1);
