import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleType4Schema, type RuleType4 } from "./rule-type4.js";

export type EventBreakerExistingOrNewNewRuleTypeCsv = {
  /** Type of event-breaking rule to apply when creating a new inline ruleset. */
  ruleType?: RuleType4;
  /** Delimiter character to use to split values */
  delimiter: string;
  /** Character used to quote literal values */
  quoteChar: string;
  /** Character used to escape the quote character in field values */
  escapeChar: string;
  /** Optional timestamp field name in extracted events */
  timeField?: string;
};

export const eventBreakerExistingOrNewNewRuleTypeCsvSchema: Schema<EventBreakerExistingOrNewNewRuleTypeCsv> =
  s.object<EventBreakerExistingOrNewNewRuleTypeCsv>({
    ruleType: s.optional(s.lazy(() => ruleType4Schema)),
    delimiter: s.string(),
    quoteChar: s.string(),
    escapeChar: s.string(),
    timeField: s.optional(s.string()),
  });
