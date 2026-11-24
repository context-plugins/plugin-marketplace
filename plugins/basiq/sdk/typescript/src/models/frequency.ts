import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum detailing frequency regular income */
export const Frequency = {
  Daily: "daily",
  Weekly: "weekly",
  BiWeekly: "bi-weekly",
  Monthly: "monthly",
  BiMonthly: "bi-monthly",
  Quarterly: "quarterly",
  HalfYear: "half-year",
  Yearly: "yearly",
} as const;
export type Frequency = (typeof Frequency)[keyof typeof Frequency] | (string & {});

export const frequencySchema: EnumSchema<Frequency> = s.enumOf<Frequency>(Frequency);
