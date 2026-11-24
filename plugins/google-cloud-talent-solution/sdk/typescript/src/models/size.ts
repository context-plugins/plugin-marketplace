import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The employer's company size. */
export const Size = {
  CompanySizeUnspecified: "COMPANY_SIZE_UNSPECIFIED",
  Mini: "MINI",
  Small: "SMALL",
  Smedium: "SMEDIUM",
  Medium: "MEDIUM",
  Big: "BIG",
  Bigger: "BIGGER",
  Giant: "GIANT",
} as const;
export type Size = (typeof Size)[keyof typeof Size] | (string & {});

export const sizeSchema: EnumSchema<Size> = s.enumOf<Size>(Size);
