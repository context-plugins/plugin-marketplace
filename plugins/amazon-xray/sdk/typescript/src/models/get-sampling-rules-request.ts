import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetSamplingRulesRequest = {
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSamplingRulesRequestSchema: Schema<GetSamplingRulesRequest> =
  s.object<GetSamplingRulesRequest>(
    {
      nextToken: s.optional(s.string()),
      _keysMap: {
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
