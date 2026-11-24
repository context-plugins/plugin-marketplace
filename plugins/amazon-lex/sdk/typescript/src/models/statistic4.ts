import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The summary statistic to calculate. Sum – The total count for the category you provide in name.
 * Average – The total count divided by the number of sessions in the category you provide in name.
 * Max – The highest count in the category you provide in name.
 */
export const Statistic4 = {
  Sum: "Sum",
  Avg: "Avg",
  Max: "Max",
} as const;
export type Statistic4 = (typeof Statistic4)[keyof typeof Statistic4] | (string & {});

export const statistic4Schema: EnumSchema<Statistic4> = s.enumOf<Statistic4>(Statistic4);
