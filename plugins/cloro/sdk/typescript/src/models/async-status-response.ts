import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { concurrencySchema, type Concurrency } from "./concurrency.js";
import {
  priorityBreakdownInternalSchema,
  priorityBreakdownSchema,
  type PriorityBreakdown,
} from "./priority-breakdown.js";

export type AsyncStatusResponse = {
  /** Number of tasks currently queued for this organization (status `QUEUED`). */
  queuedTasks: number;
  /** Number of tasks currently being processed for this organization (status `PROCESSING`). */
  processingTasks: number;
  /**
   * Queued task counts per priority level, ordered by priority descending. Only includes priority
   * levels that have queued tasks.
   */
  priorityBreakdown: PriorityBreakdown[];
  /** Current concurrency usage. Null if unable to retrieve concurrency information. */
  concurrency?: Concurrency | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const asyncStatusResponseProperties: s.Shape<AsyncStatusResponse> = {
  queuedTasks: s.int(),
  processingTasks: s.int(),
  priorityBreakdown: s.array(s.lazy(() => priorityBreakdownInternalSchema)),
  concurrency: s.optionalNullable(s.lazy(() => concurrencySchema)),
};

export const asyncStatusResponseInternalSchema: Schema<AsyncStatusResponse> = s.object<AsyncStatusResponse>(
  asyncStatusResponseProperties,
  { additionalProperties: s.json() },
);

export const asyncStatusResponseSchema: Schema<AsyncStatusResponse> = s.lazySchema(() =>
  s.object<AsyncStatusResponse>(
    {
      ...asyncStatusResponseProperties,
      priorityBreakdown: s.array(s.lazy(() => priorityBreakdownSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
