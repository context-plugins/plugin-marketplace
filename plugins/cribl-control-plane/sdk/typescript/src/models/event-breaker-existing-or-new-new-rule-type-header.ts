import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleType3Schema, type RuleType3 } from "./rule-type3.js";

export type EventBreakerExistingOrNewNewRuleTypeHeader = {
  /** Type of event-breaking rule to apply when creating a new inline ruleset. */
  ruleType?: RuleType3;
  /** Field delimiter regex */
  delimiterRegex: string;
  /**
   * Regex with one capturing group that captures all fields (and delimiters) to be broken by field
   * delimiter
   */
  fieldsLineRegex: string;
  /** Regex matching a file header line */
  headerLineRegex: string;
  /** Representation of a null value. Null fields are not added to events. */
  nullFieldVal?: string;
  /** Clean field names by replacing non [a-zA-Z0-9] characters with _ */
  cleanFields?: boolean;
};

export const eventBreakerExistingOrNewNewRuleTypeHeaderSchema: Schema<EventBreakerExistingOrNewNewRuleTypeHeader> =
  s.object<EventBreakerExistingOrNewNewRuleTypeHeader>({
    ruleType: s.optional(s.lazy(() => ruleType3Schema)),
    delimiterRegex: s.string(),
    fieldsLineRegex: s.string(),
    headerLineRegex: s.string(),
    nullFieldVal: s.optional(s.string()),
    cleanFields: s.optional(s.boolean()),
  });
