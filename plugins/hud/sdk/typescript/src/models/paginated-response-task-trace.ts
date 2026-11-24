import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskTraceSchema, type TaskTrace } from "./task-trace.js";

export type PaginatedResponseTaskTrace = {
  items: TaskTrace[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseTaskTraceSchema: Schema<PaginatedResponseTaskTrace> =
  s.object<PaginatedResponseTaskTrace>(
    {
      items: s.array(s.lazy(() => taskTraceSchema)),
      total: s.int(),
      limit: s.int(),
      offset: s.int(),
    },
    { additionalProperties: s.json() },
  );
