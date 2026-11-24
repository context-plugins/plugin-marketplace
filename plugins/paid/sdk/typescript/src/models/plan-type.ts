import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of plan (flat for fixed pricing, usage for usage-based, credit for prepaid credits) */
export const PlanType = {
  Flat: "flat",
  Usage: "usage",
  Credit: "credit",
} as const;
export type PlanType = (typeof PlanType)[keyof typeof PlanType] | (string & {});

export const planTypeSchema: EnumSchema<PlanType> = s.enumOf<PlanType>(PlanType);
