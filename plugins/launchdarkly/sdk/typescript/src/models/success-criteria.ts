import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** For custom metrics, the success criteria */
export const SuccessCriteria = {
  HigherThanBaseline: "HigherThanBaseline",
  LowerThanBaseline: "LowerThanBaseline",
} as const;
export type SuccessCriteria = (typeof SuccessCriteria)[keyof typeof SuccessCriteria] | (string & {});

export const successCriteriaSchema: EnumSchema<SuccessCriteria> = s.enumOf<SuccessCriteria>(SuccessCriteria);
