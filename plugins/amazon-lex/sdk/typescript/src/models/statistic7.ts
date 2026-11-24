import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The summary statistic that you requested to calculate. Sum – The total count for the category you
 * provide in name. Average – The total count divided by the number of utterances in the category
 * you provide in name. Max – The highest count in the category you provide in name.
 */
export const Statistic7 = {
  Sum: "Sum",
  Avg: "Avg",
  Max: "Max",
} as const;
export type Statistic7 = (typeof Statistic7)[keyof typeof Statistic7] | (string & {});

export const statistic7Schema: EnumSchema<Statistic7> = s.enumOf<Statistic7>(Statistic7);
