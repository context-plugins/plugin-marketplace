import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current workspace plan. */
export const CurrentPlan = {
  Business: "Business",
  Starter: "Starter",
} as const;
export type CurrentPlan = (typeof CurrentPlan)[keyof typeof CurrentPlan] | (string & {});

export const currentPlanSchema: EnumSchema<CurrentPlan> = s.enumOf<CurrentPlan>(CurrentPlan);
