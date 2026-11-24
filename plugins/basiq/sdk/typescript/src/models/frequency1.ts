import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Frequency is "other", "irregular" or a time period e.g. "bi-weekly" */
export const Frequency1 = {
  Daily: "daily",
  Weekly: "weekly",
  BiWeekly: "bi-weekly",
  Monthly: "monthly",
  BiMonthly: "bi-monthly",
  Quarterly: "quarterly",
  HalfYear: "half-year",
  Yearly: "yearly",
  Other: "other",
  Irregular: "irregular",
} as const;
export type Frequency1 = (typeof Frequency1)[keyof typeof Frequency1] | (string & {});

export const frequency1Schema: EnumSchema<Frequency1> = s.enumOf<Frequency1>(Frequency1);
