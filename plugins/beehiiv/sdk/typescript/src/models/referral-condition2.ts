import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The condition required to show the block to subscribers. */
export const ReferralCondition2 = {
  Eq: "eq",
  Gt: "gt",
  Lt: "lt",
} as const;
export type ReferralCondition2 = (typeof ReferralCondition2)[keyof typeof ReferralCondition2] | (string & {});

export const referralCondition2Schema: EnumSchema<ReferralCondition2> =
  s.enumOf<ReferralCondition2>(ReferralCondition2);
