import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Instructs how to combine multiple condition sets. Defaults to "or" (subscriber can match any
 * condition). Use "and" to show the block if the subscriber meets all conditions.
 */
export const ConditionSetOperator2 = {
  And: "and",
  Or: "or",
} as const;
export type ConditionSetOperator2 =
  | (typeof ConditionSetOperator2)[keyof typeof ConditionSetOperator2]
  | (string & {});

export const conditionSetOperator2Schema: EnumSchema<ConditionSetOperator2> =
  s.enumOf<ConditionSetOperator2>(ConditionSetOperator2);
