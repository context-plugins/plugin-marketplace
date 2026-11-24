import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How cautious `engage` is. Default balanced. */
export const Policy = {
  Strict: "strict",
  Balanced: "balanced",
  Permissive: "permissive",
} as const;
export type Policy = (typeof Policy)[keyof typeof Policy] | (string & {});

export const policySchema: EnumSchema<Policy> = s.enumOf<Policy>(Policy);
