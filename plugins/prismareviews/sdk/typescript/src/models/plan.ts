import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Plan = {
  Spark: "spark",
  Beam: "beam",
  Spectrum: "spectrum",
  Aurora: "aurora",
  Custom: "custom",
} as const;
export type Plan = (typeof Plan)[keyof typeof Plan] | (string & {});

export const planSchema: EnumSchema<Plan> = s.enumOf<Plan>(Plan);
