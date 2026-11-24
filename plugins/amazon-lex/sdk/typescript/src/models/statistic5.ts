import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The summary statistic that you requested to calculate. Sum – The total count for the category you
 * provide in name. Average – The total count divided by the number of sessions in the category you
 * provide in name. Max – The highest count in the category you provide in name.
 */
export const Statistic5 = {
  Sum: "Sum",
  Avg: "Avg",
  Max: "Max",
} as const;
export type Statistic5 = (typeof Statistic5)[keyof typeof Statistic5] | (string & {});

export const statistic5Schema: EnumSchema<Statistic5> = s.enumOf<Statistic5>(Statistic5);
