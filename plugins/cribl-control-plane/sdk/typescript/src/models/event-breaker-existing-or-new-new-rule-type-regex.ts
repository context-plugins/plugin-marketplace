import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleTypeSchema, type RuleType } from "./rule-type.js";

export type EventBreakerExistingOrNewNewRuleTypeRegex = {
  /** Type of event-breaking rule to apply when creating a new inline ruleset. */
  ruleType?: RuleType;
  /**
   * The regex used to break the stream into events at the beginning of the match. Matched content
   * will be consumed, unless you use a lookahead regex such as (?=pattern) to keep it. Do NOT use
   * capturing groups in the pattern.
   */
  eventBreakerRegex: string;
};

export const eventBreakerExistingOrNewNewRuleTypeRegexSchema: Schema<EventBreakerExistingOrNewNewRuleTypeRegex> =
  s.object<EventBreakerExistingOrNewNewRuleTypeRegex>({
    ruleType: s.optional(s.lazy(() => ruleTypeSchema)),
    eventBreakerRegex: s.string(),
  });
