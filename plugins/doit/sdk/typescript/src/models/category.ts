import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The insight category. */
export const Category = {
  FinOps: "FinOps",
  OperationalExcellence: "Operational excellence",
  PerformanceEfficiency: "Performance efficiency",
  Reliability: "Reliability",
  Security: "Security",
  Sustainability: "Sustainability",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
