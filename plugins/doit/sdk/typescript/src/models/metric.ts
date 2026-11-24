import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Budget metric */
export const Metric = {
  Cost: "cost",
  AmortizedCost: "amortized_cost",
} as const;
export type Metric = (typeof Metric)[keyof typeof Metric] | (string & {});

export const metricSchema: EnumSchema<Metric> = s.enumOf<Metric>(Metric);
