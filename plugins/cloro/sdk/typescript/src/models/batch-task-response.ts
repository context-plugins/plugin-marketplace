import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { summarySchema, type Summary } from "./summary.js";
import {
  resultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiInternalSchema,
  resultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiSchema,
  type ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi,
} from "./unions/result-cloro-dev-async-and-cloro-dev-countries-and-cloro-dev-credits-api.js";

export type BatchTaskResponse = {
  /** Always true for a successfully processed batch (individual tasks may still fail). */
  success: boolean;
  /** Aggregate counts for the batch. */
  summary: Summary;
  /** Per-task results preserving the original input order by index. */
  results: ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const batchTaskResponseProperties: s.Shape<BatchTaskResponse> = {
  success: s.boolean(),
  summary: summarySchema,
  results: s.array(s.lazy(() => resultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiInternalSchema)),
};

export const batchTaskResponseInternalSchema: Schema<BatchTaskResponse> = s.object<BatchTaskResponse>(
  batchTaskResponseProperties,
  { additionalProperties: s.json() },
);

export const batchTaskResponseSchema: Schema<BatchTaskResponse> = s.lazySchema(() =>
  s.object<BatchTaskResponse>(
    {
      ...batchTaskResponseProperties,
      results: s.array(s.lazy(() => resultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
