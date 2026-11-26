import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  trendingRequestInternalSchema,
  trendingRequestSchema,
  type TrendingRequest,
} from "./trending-request.js";
import {
  trendingResultInternalSchema,
  trendingResultSchema,
  type TrendingResult,
} from "./trending-result.js";

export type TrendingResponse = {
  trendingParameters: TrendingRequest;
  results: TrendingResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const trendingResponseProperties: s.Shape<TrendingResponse> = {
  trendingParameters: trendingRequestInternalSchema,
  results: s.array(s.lazy(() => trendingResultInternalSchema)),
};

export const trendingResponseInternalSchema: Schema<TrendingResponse> = s.object<TrendingResponse>(
  trendingResponseProperties,
  { additionalProperties: s.json() },
);

export const trendingResponseSchema: Schema<TrendingResponse> = s.lazySchema(() =>
  s.object<TrendingResponse>(
    {
      ...trendingResponseProperties,
      trendingParameters: trendingRequestSchema,
      results: s.array(s.lazy(() => trendingResultSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
