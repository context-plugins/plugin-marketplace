import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleType2Schema, type RuleType2 } from "./rule-type2.js";

export type EventBreakerExistingOrNewNewRuleTypeJsonArray = {
  /** Type of event-breaking rule to apply when creating a new inline ruleset. */
  ruleType?: RuleType2;
  /**
   * The path to an array in a JSON event with records to extract, such as Records or
   * level1.level2.events. Leave blank if result itself is an array, such as [{...},{...}]
   */
  jsonArrayField?: string;
  /**
   * Top-level fields to copy to the output events. Nested fields are not supported. 'Array field'
   * is always excluded. If 'Array field' points to a nested array, the entire top-level object will
   * be excluded. Supports * wildcards. Enclose field names containing special characters in single
   * or double quotes.
   */
  parentFieldsToCopy?: string[];
  /**
   * Automatically extract fields from JSON events. When disabled, only _raw and _time are defined
   * on extracted events.
   */
  jsonExtractAll?: boolean;
  /**
   * List of fields to remove from the output events. Supports * wildcards. Enclose field names
   * containing special characters in single or double quotes.
   */
  fieldsToRemove?: string[];
  /**
   * Optional path to timestamp field in extracted events, such as eventTime or
   * level1.level2.eventTime.
   */
  jsonTimeField?: string;
};

export const eventBreakerExistingOrNewNewRuleTypeJsonArraySchema: Schema<EventBreakerExistingOrNewNewRuleTypeJsonArray> =
  s.object<EventBreakerExistingOrNewNewRuleTypeJsonArray>({
    ruleType: s.optional(s.lazy(() => ruleType2Schema)),
    jsonArrayField: s.optional(s.string()),
    parentFieldsToCopy: s.optional(s.array(s.string())),
    jsonExtractAll: s.optional(s.boolean()),
    fieldsToRemove: s.optional(s.array(s.string())),
    jsonTimeField: s.optional(s.string()),
  });
