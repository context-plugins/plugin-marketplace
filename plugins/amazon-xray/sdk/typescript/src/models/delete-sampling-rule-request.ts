import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteSamplingRuleRequest = {
  /** The name of the sampling rule. Specify a rule by either name or ARN, but not both. */
  ruleName?: string;
  /** The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. */
  ruleArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSamplingRuleRequestSchema: Schema<DeleteSamplingRuleRequest> =
  s.object<DeleteSamplingRuleRequest>(
    {
      ruleName: s.optional(s.string()),
      ruleArn: s.optional(s.string()),
      _keysMap: {
        ruleName: "RuleName",
        ruleArn: "RuleARN",
      },
    },
    { additionalProperties: s.json() },
  );
