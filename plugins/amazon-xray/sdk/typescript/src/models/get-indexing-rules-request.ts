import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetIndexingRulesRequest = {
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of
   * indexes.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getIndexingRulesRequestSchema: Schema<GetIndexingRulesRequest> =
  s.object<GetIndexingRulesRequest>(
    {
      nextToken: s.optional(s.string()),
      _keysMap: {
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
