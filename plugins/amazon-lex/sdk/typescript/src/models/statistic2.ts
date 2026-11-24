import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The summary statistic to calculate. Sum – The total count for the category you provide in name.
 * Average – The total count divided by the number of intent stages in the category you provide in
 * name. Max – The highest count in the category you provide in name.
 */
export const Statistic2 = {
  Sum: "Sum",
  Avg: "Avg",
  Max: "Max",
} as const;
export type Statistic2 = (typeof Statistic2)[keyof typeof Statistic2] | (string & {});

export const statistic2Schema: EnumSchema<Statistic2> = s.enumOf<Statistic2>(Statistic2);
