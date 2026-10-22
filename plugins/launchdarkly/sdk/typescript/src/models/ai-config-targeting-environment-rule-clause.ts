import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigTargetingEnvironmentRuleClause = {
  attribute: string;
  id: string;
  negate: boolean;
  op: string;
  values: Record<string, unknown>[];
};

export const aiConfigTargetingEnvironmentRuleClauseSchema: Schema<AiConfigTargetingEnvironmentRuleClause> =
  s.object<AiConfigTargetingEnvironmentRuleClause>({
    attribute: s.string(),
    id: s.string(),
    negate: s.boolean(),
    op: s.string(),
    values: s.array(s.record(s.string(), s.unknown())),
  });
