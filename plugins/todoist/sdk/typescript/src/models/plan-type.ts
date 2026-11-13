import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The plan the workspace is currently on */
export const PlanType = {
  Starter: "STARTER",
  Business: "BUSINESS",
} as const;
export type PlanType = (typeof PlanType)[keyof typeof PlanType] | (string & {});

export const planTypeSchema: EnumSchema<PlanType> = s.enumOf<PlanType>(PlanType);
