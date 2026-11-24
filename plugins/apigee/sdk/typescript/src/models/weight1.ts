import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The weight of the assessment which was set in the profile. */
export const Weight1 = {
  WeightUnspecified: "WEIGHT_UNSPECIFIED",
  Minor: "MINOR",
  Moderate: "MODERATE",
  Major: "MAJOR",
} as const;
export type Weight1 = (typeof Weight1)[keyof typeof Weight1] | (string & {});

export const weight1Schema: EnumSchema<Weight1> = s.enumOf<Weight1>(Weight1);
