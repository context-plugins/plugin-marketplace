import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The t-shirt size of the Epic for high-level effort estimation. */
export const Size = {
  Small: "small",
  Xlarge: "xlarge",
  Medium: "medium",
  Large: "large",
} as const;
export type Size = (typeof Size)[keyof typeof Size] | (string & {});

export const sizeSchema: EnumSchema<Size> = s.enumOf<Size>(Size);
