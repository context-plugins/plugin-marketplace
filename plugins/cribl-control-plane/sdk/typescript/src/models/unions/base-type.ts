import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  eventBreakerExistingOrNewNewRuleTypeCsvSchema,
  type EventBreakerExistingOrNewNewRuleTypeCsv,
} from "../event-breaker-existing-or-new-new-rule-type-csv.js";
import {
  eventBreakerExistingOrNewNewRuleTypeHeaderSchema,
  type EventBreakerExistingOrNewNewRuleTypeHeader,
} from "../event-breaker-existing-or-new-new-rule-type-header.js";
import {
  eventBreakerExistingOrNewNewRuleTypeJsonArraySchema,
  type EventBreakerExistingOrNewNewRuleTypeJsonArray,
} from "../event-breaker-existing-or-new-new-rule-type-json-array.js";
import {
  eventBreakerExistingOrNewNewRuleTypeJsonSchema,
  type EventBreakerExistingOrNewNewRuleTypeJson,
} from "../event-breaker-existing-or-new-new-rule-type-json.js";
import {
  eventBreakerExistingOrNewNewRuleTypeRegexSchema,
  type EventBreakerExistingOrNewNewRuleTypeRegex,
} from "../event-breaker-existing-or-new-new-rule-type-regex.js";

export type BaseType =
  | (EventBreakerExistingOrNewNewRuleTypeRegex & { ruleType: "regex" })
  | (EventBreakerExistingOrNewNewRuleTypeJson & { ruleType: "json" })
  | (EventBreakerExistingOrNewNewRuleTypeJsonArray & { ruleType: "json_array" })
  | (EventBreakerExistingOrNewNewRuleTypeHeader & { ruleType: "header" })
  | (EventBreakerExistingOrNewNewRuleTypeCsv & { ruleType: "csv" });

export const baseTypeSchema: Schema<BaseType> = s.discriminatedUnion<BaseType>("ruleType", {
  regex: eventBreakerExistingOrNewNewRuleTypeRegexSchema,
  json: eventBreakerExistingOrNewNewRuleTypeJsonSchema,
  json_array: eventBreakerExistingOrNewNewRuleTypeJsonArraySchema,
  header: eventBreakerExistingOrNewNewRuleTypeHeaderSchema,
  csv: eventBreakerExistingOrNewNewRuleTypeCsvSchema,
});
