import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Billing frequency unit. daily requires interval ≥ 7. */
export const Period = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
  Quarterly: "quarterly",
  Yearly: "yearly",
} as const;
export type Period = (typeof Period)[keyof typeof Period] | (string & {});

export const periodSchema: EnumSchema<Period> = s.enumOf<Period>(Period);
