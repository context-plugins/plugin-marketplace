import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Period = {
  Day: "day",
  Week: "week",
  Days28: "days_28",
  Month: "month",
  Lifetime: "lifetime",
} as const;
export type Period = (typeof Period)[keyof typeof Period] | (string & {});

export const periodSchema: EnumSchema<Period> = s.enumOf<Period>(Period);
