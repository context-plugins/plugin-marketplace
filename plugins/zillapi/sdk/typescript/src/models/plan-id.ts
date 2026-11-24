import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanId = {
  Free: "free",
  Monthly: "monthly",
  Annual: "annual",
  Enterprise: "enterprise",
} as const;
export type PlanId = (typeof PlanId)[keyof typeof PlanId] | (string & {});

export const planIdSchema: EnumSchema<PlanId> = s.enumOf<PlanId>(PlanId);
