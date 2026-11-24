import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { indexingRuleSchema, type IndexingRule } from "./indexing-rule.js";

export type GetIndexingRulesResult = {
  /** Retrieves all indexing rules. */
  indexingRules?: IndexingRule[];
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of
   * indexes.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getIndexingRulesResultSchema: Schema<GetIndexingRulesResult> = s.object<GetIndexingRulesResult>(
  {
    indexingRules: s.optional(s.array(s.lazy(() => indexingRuleSchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      indexingRules: "IndexingRules",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
