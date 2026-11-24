import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The purpose of the condition set, indicating its intended use. */
export const ConditionSetPurpose = {
  DynamicContent: "dynamic_content",
} as const;
export type ConditionSetPurpose =
  | (typeof ConditionSetPurpose)[keyof typeof ConditionSetPurpose]
  | (string & {});

export const conditionSetPurposeSchema: EnumSchema<ConditionSetPurpose> =
  s.enumOf<ConditionSetPurpose>(ConditionSetPurpose);
