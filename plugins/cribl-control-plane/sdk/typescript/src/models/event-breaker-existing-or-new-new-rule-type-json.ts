import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleType1Schema, type RuleType1 } from "./rule-type1.js";

export type EventBreakerExistingOrNewNewRuleTypeJson = {
  /** Type of event-breaking rule to apply when creating a new inline ruleset. */
  ruleType?: RuleType1;
};

export const eventBreakerExistingOrNewNewRuleTypeJsonSchema: Schema<EventBreakerExistingOrNewNewRuleTypeJson> =
  s.object<EventBreakerExistingOrNewNewRuleTypeJson>({
    ruleType: s.optional(s.lazy(() => ruleType1Schema)),
  });
