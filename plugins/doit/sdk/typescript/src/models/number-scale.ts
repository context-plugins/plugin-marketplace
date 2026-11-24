import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Scale applied to numeric values when rendering the report. */
export const NumberScale = {
  Auto: "auto",
  Thousands: "thousands",
  Millions: "millions",
  Billions: "billions",
  Raw: "raw",
} as const;
export type NumberScale = (typeof NumberScale)[keyof typeof NumberScale] | (string & {});

export const numberScaleSchema: EnumSchema<NumberScale> = s.enumOf<NumberScale>(NumberScale);
