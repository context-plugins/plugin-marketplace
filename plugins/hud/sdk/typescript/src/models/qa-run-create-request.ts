import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskIdsInternalSchema, taskIdsSchema, type TaskIds } from "./unions/task-ids.js";
import { traceIdsInternalSchema, traceIdsSchema, type TraceIds } from "./unions/trace-ids.js";

/**
 * Run each check on each subject; the request's analysis rollouts share one hidden QA job.
 *
 * Every check must judge the subjects' type. A task subject is its current version.
 */
export type QaRunCreateRequest = {
  traceIds?: TraceIds;
  taskIds?: TaskIds;
  checkKeys: string[];
  /** @default true */
  overwrite?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qaRunCreateRequestProperties: s.Shape<QaRunCreateRequest> = {
  traceIds: s.optional(s.lazy(() => traceIdsInternalSchema)),
  taskIds: s.optional(s.lazy(() => taskIdsInternalSchema)),
  checkKeys: s.array(s.string()),
  overwrite: s.defaulted(s.boolean(), true),
  _keysMap: {
    traceIds: "trace_ids",
    taskIds: "task_ids",
    checkKeys: "check_keys",
  },
};

export const qaRunCreateRequestInternalSchema: Schema<QaRunCreateRequest> = s.object<QaRunCreateRequest>(
  qaRunCreateRequestProperties,
  { additionalProperties: s.json() },
);

export const qaRunCreateRequestSchema: Schema<QaRunCreateRequest> = s.lazySchema(() =>
  s.object<QaRunCreateRequest>(
    {
      ...qaRunCreateRequestProperties,
      traceIds: s.optional(s.lazy(() => traceIdsSchema)),
      taskIds: s.optional(s.lazy(() => taskIdsSchema)),
      checkKeys: s.array(s.string()).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
