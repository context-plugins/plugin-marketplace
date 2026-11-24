import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RenewalPolicy1 = {
  Auto: "auto",
  Manual: "manual",
  Fixed: "fixed",
} as const;
export type RenewalPolicy1 = (typeof RenewalPolicy1)[keyof typeof RenewalPolicy1] | (string & {});

export const renewalPolicy1Schema: EnumSchema<RenewalPolicy1> = s.enumOf<RenewalPolicy1>(RenewalPolicy1);
