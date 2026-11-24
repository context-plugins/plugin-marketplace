import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customizationRuleSchema, type CustomizationRule } from "./customization-rule.js";
import { objectFilter1Schema, type ObjectFilter1 } from "./object-filter1.js";

/** A set of rules to apply to a set of objects. */
export type RuleSet = {
  /** Required. List of customization rules to apply. */
  customizationRules?: CustomizationRule[];
  /** Required. Object filter to apply the customization rules to. */
  objectFilter?: ObjectFilter1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ruleSetSchema: Schema<RuleSet> = s.object<RuleSet>(
  {
    customizationRules: s.optional(s.array(s.lazy(() => customizationRuleSchema))),
    objectFilter: s.optional(s.lazy(() => objectFilter1Schema)),
  },
  { additionalProperties: s.json() },
);
