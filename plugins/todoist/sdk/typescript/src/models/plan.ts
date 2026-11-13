import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Plan tier the user is currently on. */
export const Plan = {
  Free: "free",
  Pro: "pro",
  ProGifted: "pro_gifted",
  ProLegacy: "pro_legacy",
} as const;
export type Plan = (typeof Plan)[keyof typeof Plan] | (string & {});

export const planSchema: EnumSchema<Plan> = s.enumOf<Plan>(Plan);
