import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultInternalSchema, resultSchema, type Result } from "./result.js";
import { summaryInternalSchema, summarySchema, type Summary } from "./summary.js";

export type SearchBatchResponse = {
  results: Result[];
  summary: Summary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchBatchResponseProperties: s.Shape<SearchBatchResponse> = {
  results: s.array(s.lazy(() => resultInternalSchema)),
  summary: summaryInternalSchema,
};

export const searchBatchResponseInternalSchema: Schema<SearchBatchResponse> = s.object<SearchBatchResponse>(
  searchBatchResponseProperties,
  { additionalProperties: s.json() },
);

export const searchBatchResponseSchema: Schema<SearchBatchResponse> = s.lazySchema(() =>
  s.object<SearchBatchResponse>(
    {
      ...searchBatchResponseProperties,
      results: s.array(s.lazy(() => resultSchema)),
      summary: summarySchema,
    },
    { additionalProperties: s.json() },
  ),
);
