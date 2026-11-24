import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { indexingRuleValueSchema, type IndexingRuleValue } from "./indexing-rule-value.js";

export type IndexingRule = {
  /** The name of the indexing rule. */
  name?: string;
  /** Displays when the rule was last modified, in Unix time seconds. */
  modifiedAt?: Date;
  /** Exactly one member is set. */
  rule?: IndexingRuleValue;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indexingRuleSchema: Schema<IndexingRule> = s.object<IndexingRule>(
  {
    name: s.optional(s.string()),
    modifiedAt: s.optional(s.dateTime()),
    rule: s.optional(s.lazy(() => indexingRuleValueSchema)),
    _keysMap: {
      name: "Name",
      modifiedAt: "ModifiedAt",
      rule: "Rule",
    },
  },
  { additionalProperties: s.json() },
);
