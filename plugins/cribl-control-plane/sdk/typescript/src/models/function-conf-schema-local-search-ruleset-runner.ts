import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rulesetTypeSchema, type RulesetType } from "./ruleset-type.js";

export type FunctionConfSchemaLocalSearchRulesetRunner = {
  /** Type of ruleset to apply: dataset or datatype. */
  rulesetType?: RulesetType;
  /** ID of the ruleset to apply. */
  rulesetId?: string;
  /** Full ruleset definition, used with live data capture for draft or unsaved rulesets. */
  ruleset?: Record<string, unknown>;
  /**
   * Only for use with live data capture. Mark events that were dropped by dataset rules and still
   * include them for capture
   */
  markAndIncludeDroppedEvents?: boolean;
};

export const functionConfSchemaLocalSearchRulesetRunnerSchema: Schema<FunctionConfSchemaLocalSearchRulesetRunner> =
  s.object<FunctionConfSchemaLocalSearchRulesetRunner>({
    rulesetType: s.optional(s.lazy(() => rulesetTypeSchema)),
    rulesetId: s.optional(s.string()),
    ruleset: s.optional(s.record(s.string(), s.unknown())),
    markAndIncludeDroppedEvents: s.optional(s.boolean()),
  });
