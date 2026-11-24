import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Category1 = {
  FinOps: "FinOps",
  OperationalExcellence: "OperationalExcellence",
  PerformanceEfficiency: "PerformanceEfficiency",
  Reliability: "Reliability",
  Security: "Security",
  Sustainability: "Sustainability",
} as const;
export type Category1 = (typeof Category1)[keyof typeof Category1] | (string & {});

export const category1Schema: EnumSchema<Category1> = s.enumOf<Category1>(Category1);
