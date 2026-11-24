import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  tasksetResponseInternalSchema,
  tasksetResponseSchema,
  type TasksetResponse,
} from "./taskset-response.js";

export type PaginatedResponseTasksetResponse = {
  items: TasksetResponse[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginatedResponseTasksetResponseProperties: s.Shape<PaginatedResponseTasksetResponse> = {
  items: s.array(s.lazy(() => tasksetResponseInternalSchema)),
  total: s.int(),
  limit: s.int(),
  offset: s.int(),
};

export const paginatedResponseTasksetResponseInternalSchema: Schema<PaginatedResponseTasksetResponse> =
  s.object<PaginatedResponseTasksetResponse>(paginatedResponseTasksetResponseProperties, {
    additionalProperties: s.json(),
  });

export const paginatedResponseTasksetResponseSchema: Schema<PaginatedResponseTasksetResponse> = s.lazySchema(
  () =>
    s.object<PaginatedResponseTasksetResponse>(
      {
        ...paginatedResponseTasksetResponseProperties,
        items: s.array(s.lazy(() => tasksetResponseSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
