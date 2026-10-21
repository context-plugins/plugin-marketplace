import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { opSchema, type Op } from "./op.js";

export type RuleClause = {
  /** The attribute the rule applies to, for example, last name or email address */
  attribute?: string;
  /** The operator to apply to the given attribute */
  op?: Op;
  /** Whether the operator should be negated */
  negate?: boolean;
};

export const ruleClauseSchema: Schema<RuleClause> = s.object<RuleClause>({
  attribute: s.optional(s.string()),
  op: s.optional(s.lazy(() => opSchema)),
  negate: s.optional(s.boolean()),
});
