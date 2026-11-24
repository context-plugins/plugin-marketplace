import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelResponseInternalSchema, modelResponseSchema, type ModelResponse } from "./model-response.js";

export type PaginatedResponseModelResponse = {
  items: ModelResponse[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginatedResponseModelResponseProperties: s.Shape<PaginatedResponseModelResponse> = {
  items: s.array(s.lazy(() => modelResponseInternalSchema)),
  total: s.int(),
  limit: s.int(),
  offset: s.int(),
};

export const paginatedResponseModelResponseInternalSchema: Schema<PaginatedResponseModelResponse> =
  s.object<PaginatedResponseModelResponse>(paginatedResponseModelResponseProperties, {
    additionalProperties: s.json(),
  });

export const paginatedResponseModelResponseSchema: Schema<PaginatedResponseModelResponse> = s.lazySchema(() =>
  s.object<PaginatedResponseModelResponse>(
    {
      ...paginatedResponseModelResponseProperties,
      items: s.array(s.lazy(() => modelResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
