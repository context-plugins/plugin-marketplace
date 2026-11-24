import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Force an opt-in style. Omit to let the topic and channel decide; a value they cannot honor is
 * refused rather than silently resolved.
 */
export const OptIn = {
  Single: "single",
  Double: "double",
} as const;
export type OptIn = (typeof OptIn)[keyof typeof OptIn] | (string & {});

export const optInSchema: EnumSchema<OptIn> = s.enumOf<OptIn>(OptIn);
