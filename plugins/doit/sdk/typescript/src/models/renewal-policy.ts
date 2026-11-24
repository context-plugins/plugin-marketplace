import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The renewal policy. */
export const RenewalPolicy = {
  Auto: "auto",
  Manual: "manual",
  Fixed: "fixed",
} as const;
export type RenewalPolicy = (typeof RenewalPolicy)[keyof typeof RenewalPolicy] | (string & {});

export const renewalPolicySchema: EnumSchema<RenewalPolicy> = s.enumOf<RenewalPolicy>(RenewalPolicy);
