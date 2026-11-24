import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SamplingStatisticSummariesRequest = {
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingStatisticSummariesRequestSchema: Schema<SamplingStatisticSummariesRequest> =
  s.object<SamplingStatisticSummariesRequest>(
    {
      nextToken: s.optional(s.string()),
      _keysMap: {
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
