import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskResponseInternalSchema, taskResponseSchema, type TaskResponse } from "./task-response.js";

export type PaginatedResponseTaskResponse = {
  items: TaskResponse[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginatedResponseTaskResponseProperties: s.Shape<PaginatedResponseTaskResponse> = {
  items: s.array(s.lazy(() => taskResponseInternalSchema)),
  total: s.int(),
  limit: s.int(),
  offset: s.int(),
};

export const paginatedResponseTaskResponseInternalSchema: Schema<PaginatedResponseTaskResponse> =
  s.object<PaginatedResponseTaskResponse>(paginatedResponseTaskResponseProperties, {
    additionalProperties: s.json(),
  });

export const paginatedResponseTaskResponseSchema: Schema<PaginatedResponseTaskResponse> = s.lazySchema(() =>
  s.object<PaginatedResponseTaskResponse>(
    {
      ...paginatedResponseTaskResponseProperties,
      items: s.array(s.lazy(() => taskResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
