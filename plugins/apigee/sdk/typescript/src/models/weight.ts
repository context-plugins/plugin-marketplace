import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The weight of the assessment. */
export const Weight = {
  WeightUnspecified: "WEIGHT_UNSPECIFIED",
  Minor: "MINOR",
  Moderate: "MODERATE",
  Major: "MAJOR",
} as const;
export type Weight = (typeof Weight)[keyof typeof Weight] | (string & {});

export const weightSchema: EnumSchema<Weight> = s.enumOf<Weight>(Weight);
