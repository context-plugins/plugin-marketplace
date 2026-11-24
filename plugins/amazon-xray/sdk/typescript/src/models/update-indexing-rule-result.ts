import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { indexingRuleSchema, type IndexingRule } from "./indexing-rule.js";

export type UpdateIndexingRuleResult = {
  indexingRule?: IndexingRule;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateIndexingRuleResultSchema: Schema<UpdateIndexingRuleResult> =
  s.object<UpdateIndexingRuleResult>(
    {
      indexingRule: s.optional(s.lazy(() => indexingRuleSchema)),
      _keysMap: {
        indexingRule: "IndexingRule",
      },
    },
    { additionalProperties: s.json() },
  );
