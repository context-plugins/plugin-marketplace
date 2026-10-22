import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The size of the flag event impact. Sizes are defined as: none (0%), small (0-20%), medium
 * (20-80%), large (>80%)
 */
export const Size = {
  None: "none",
  Small: "small",
  Medium: "medium",
  Large: "large",
} as const;
export type Size = (typeof Size)[keyof typeof Size] | (string & {});

export const sizeSchema: EnumSchema<Size> = s.enumOf<Size>(Size);
