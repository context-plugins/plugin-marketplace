import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus] | (string & {});

export const planStatusSchema: EnumSchema<PlanStatus> = s.enumOf<PlanStatus>(PlanStatus);
