import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The summary statistic to calculate. Sum – The total count for the category you provide in name.
 * Average – The total count divided by the number of intents in the category you provide in name.
 * Max – The highest count in the category you provide in name.
 */
export const Statistic = {
  Sum: "Sum",
  Avg: "Avg",
  Max: "Max",
} as const;
export type Statistic = (typeof Statistic)[keyof typeof Statistic] | (string & {});

export const statisticSchema: EnumSchema<Statistic> = s.enumOf<Statistic>(Statistic);
