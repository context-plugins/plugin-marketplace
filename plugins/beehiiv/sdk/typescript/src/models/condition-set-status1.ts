import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the condition set is currently active or has been archived. */
export const ConditionSetStatus1 = {
  Active: "active",
  Archived: "archived",
} as const;
export type ConditionSetStatus1 =
  | (typeof ConditionSetStatus1)[keyof typeof ConditionSetStatus1]
  | (string & {});

export const conditionSetStatus1Schema: EnumSchema<ConditionSetStatus1> =
  s.enumOf<ConditionSetStatus1>(ConditionSetStatus1);
