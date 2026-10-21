import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed with the specified routing
 * rule. The rule ID should be in UUID format. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were not
 * processed by any routing rule.
 */
export type RuleIdRouteTransaction = string[];

export const ruleIdRouteTransactionSchema: Schema<RuleIdRouteTransaction> = s.of<RuleIdRouteTransaction>(
  s.union([s.array(s.string())]),
);
