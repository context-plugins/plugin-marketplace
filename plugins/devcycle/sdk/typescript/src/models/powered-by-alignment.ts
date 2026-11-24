import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Alignment for "powered by" text */
export const PoweredByAlignment = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type PoweredByAlignment = (typeof PoweredByAlignment)[keyof typeof PoweredByAlignment] | (string & {});

export const poweredByAlignmentSchema: EnumSchema<PoweredByAlignment> =
  s.enumOf<PoweredByAlignment>(PoweredByAlignment);
