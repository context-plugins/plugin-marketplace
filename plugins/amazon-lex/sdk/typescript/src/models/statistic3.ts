import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The summary statistic that you requested to calculate. Sum – The total count for the category you
 * provide in name. Average – The total count divided by the number of intent stages in the category
 * you provide in name. Max – The highest count in the category you provide in name.
 */
export const Statistic3 = {
  Sum: "Sum",
  Avg: "Avg",
  Max: "Max",
} as const;
export type Statistic3 = (typeof Statistic3)[keyof typeof Statistic3] | (string & {});

export const statistic3Schema: EnumSchema<Statistic3> = s.enumOf<Statistic3>(Statistic3);
