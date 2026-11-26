import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result1InternalSchema, result1Schema, type Result1 } from "./result1.js";
import { summaryInternalSchema, summarySchema, type Summary } from "./summary.js";

export type NewsBatchResponse = {
  results: Result1[];
  summary: Summary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const newsBatchResponseProperties: s.Shape<NewsBatchResponse> = {
  results: s.array(s.lazy(() => result1InternalSchema)),
  summary: summaryInternalSchema,
};

export const newsBatchResponseInternalSchema: Schema<NewsBatchResponse> = s.object<NewsBatchResponse>(
  newsBatchResponseProperties,
  { additionalProperties: s.json() },
);

export const newsBatchResponseSchema: Schema<NewsBatchResponse> = s.lazySchema(() =>
  s.object<NewsBatchResponse>(
    {
      ...newsBatchResponseProperties,
      results: s.array(s.lazy(() => result1Schema)),
      summary: summarySchema,
    },
    { additionalProperties: s.json() },
  ),
);
