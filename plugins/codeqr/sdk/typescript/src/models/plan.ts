import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The plan of the project. */
export const Plan = {
  Free: "free",
  Starter: "starter",
  Pro: "pro",
  Business: "business",
  Scale: "scale",
  Enterprise: "enterprise",
} as const;
export type Plan = (typeof Plan)[keyof typeof Plan] | (string & {});

export const planSchema: EnumSchema<Plan> = s.enumOf<Plan>(Plan);
