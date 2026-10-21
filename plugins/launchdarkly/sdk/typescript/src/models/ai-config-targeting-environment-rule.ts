import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigTargetingEnvironmentRuleClauseSchema,
  type AiConfigTargetingEnvironmentRuleClause,
} from "./ai-config-targeting-environment-rule-clause.js";

export type AiConfigTargetingEnvironmentRule = {
  clauses: AiConfigTargetingEnvironmentRuleClause[];
  trackEvents: boolean;
};

export const aiConfigTargetingEnvironmentRuleSchema: Schema<AiConfigTargetingEnvironmentRule> =
  s.object<AiConfigTargetingEnvironmentRule>({
    clauses: s.array(s.lazy(() => aiConfigTargetingEnvironmentRuleClauseSchema)),
    trackEvents: s.boolean(),
  });
