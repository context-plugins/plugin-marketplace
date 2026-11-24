import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { traceResponseInternalSchema, traceResponseSchema, type TraceResponse } from "./trace-response.js";

export type PaginatedResponseTraceResponse = {
  items: TraceResponse[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginatedResponseTraceResponseProperties: s.Shape<PaginatedResponseTraceResponse> = {
  items: s.array(s.lazy(() => traceResponseInternalSchema)),
  total: s.int(),
  limit: s.int(),
  offset: s.int(),
};

export const paginatedResponseTraceResponseInternalSchema: Schema<PaginatedResponseTraceResponse> =
  s.object<PaginatedResponseTraceResponse>(paginatedResponseTraceResponseProperties, {
    additionalProperties: s.json(),
  });

export const paginatedResponseTraceResponseSchema: Schema<PaginatedResponseTraceResponse> = s.lazySchema(() =>
  s.object<PaginatedResponseTraceResponse>(
    {
      ...paginatedResponseTraceResponseProperties,
      items: s.array(s.lazy(() => traceResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
