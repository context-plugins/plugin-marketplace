import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReferralCondition = {
  Eq: "eq",
  Gt: "gt",
  Lt: "lt",
} as const;
export type ReferralCondition = (typeof ReferralCondition)[keyof typeof ReferralCondition] | (string & {});

export const referralConditionSchema: EnumSchema<ReferralCondition> =
  s.enumOf<ReferralCondition>(ReferralCondition);
