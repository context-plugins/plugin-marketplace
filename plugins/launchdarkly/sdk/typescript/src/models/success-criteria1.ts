import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Success criteria. Required for custom numeric metrics, optional for custom conversion metrics.
 */
export const SuccessCriteria1 = {
  HigherThanBaseline: "HigherThanBaseline",
  LowerThanBaseline: "LowerThanBaseline",
} as const;
export type SuccessCriteria1 = (typeof SuccessCriteria1)[keyof typeof SuccessCriteria1] | (string & {});

export const successCriteria1Schema: EnumSchema<SuccessCriteria1> =
  s.enumOf<SuccessCriteria1>(SuccessCriteria1);
