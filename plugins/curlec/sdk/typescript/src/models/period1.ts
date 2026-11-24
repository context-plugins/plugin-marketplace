import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Billing frequency unit. For daily, minimum interval is 7. */
export const Period1 = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
  Quarterly: "quarterly",
  Yearly: "yearly",
} as const;
export type Period1 = (typeof Period1)[keyof typeof Period1] | (string & {});

export const period1Schema: EnumSchema<Period1> = s.enumOf<Period1>(Period1);
