import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The statistic that you requested to calculate. Sum – The total count for the category you provide
 * in name. Average – The total count divided by the number of intents in the category you provide
 * in name. Max – The highest count in the category you provide in name.
 */
export const Statistic1 = {
  Sum: "Sum",
  Avg: "Avg",
  Max: "Max",
} as const;
export type Statistic1 = (typeof Statistic1)[keyof typeof Statistic1] | (string & {});

export const statistic1Schema: EnumSchema<Statistic1> = s.enumOf<Statistic1>(Statistic1);
