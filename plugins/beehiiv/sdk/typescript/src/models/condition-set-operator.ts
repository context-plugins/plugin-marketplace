import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How multiple condition sets are combined when evaluating dynamic content targeting. */
export const ConditionSetOperator = {
  And: "and",
  Or: "or",
} as const;
export type ConditionSetOperator =
  | (typeof ConditionSetOperator)[keyof typeof ConditionSetOperator]
  | (string & {});

export const conditionSetOperatorSchema: EnumSchema<ConditionSetOperator> =
  s.enumOf<ConditionSetOperator>(ConditionSetOperator);
