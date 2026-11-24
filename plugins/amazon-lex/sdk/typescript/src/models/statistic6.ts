import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The summary statistic to calculate. Sum – The total count for the category you provide in name.
 * Average – The total count divided by the number of utterances in the category you provide in
 * name. Max – The highest count in the category you provide in name.
 */
export const Statistic6 = {
  Sum: "Sum",
  Avg: "Avg",
  Max: "Max",
} as const;
export type Statistic6 = (typeof Statistic6)[keyof typeof Statistic6] | (string & {});

export const statistic6Schema: EnumSchema<Statistic6> = s.enumOf<Statistic6>(Statistic6);
