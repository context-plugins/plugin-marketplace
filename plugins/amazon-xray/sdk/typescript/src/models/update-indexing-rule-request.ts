import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { indexingRuleValueUpdateSchema, type IndexingRuleValueUpdate } from "./indexing-rule-value-update.js";

export type UpdateIndexingRuleRequest = {
  /** Name of the indexing rule to be updated. */
  name: string;
  /** Exactly one member is set. */
  rule: IndexingRuleValueUpdate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateIndexingRuleRequestSchema: Schema<UpdateIndexingRuleRequest> =
  s.object<UpdateIndexingRuleRequest>(
    {
      name: s.string(),
      rule: indexingRuleValueUpdateSchema,
      _keysMap: {
        name: "Name",
        rule: "Rule",
      },
    },
    { additionalProperties: s.json() },
  );
