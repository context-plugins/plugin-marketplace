import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConditionSetStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type ConditionSetStatus = (typeof ConditionSetStatus)[keyof typeof ConditionSetStatus] | (string & {});

export const conditionSetStatusSchema: EnumSchema<ConditionSetStatus> =
  s.enumOf<ConditionSetStatus>(ConditionSetStatus);
