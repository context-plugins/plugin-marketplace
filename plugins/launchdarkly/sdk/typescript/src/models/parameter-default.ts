import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleClauseSchema, type RuleClause } from "./rule-clause.js";

export type ParameterDefault = {
  /** The default value for the given parameter */
  value?: Record<string, unknown>;
  /** Variation value for boolean flags. Not applicable for non-boolean flags. */
  booleanVariationValue?: boolean;
  ruleClause?: RuleClause;
};

export const parameterDefaultSchema: Schema<ParameterDefault> = s.object<ParameterDefault>({
  value: s.optional(s.record(s.string(), s.unknown())),
  booleanVariationValue: s.optional(s.boolean()),
  ruleClause: s.optional(s.lazy(() => ruleClauseSchema)),
});
