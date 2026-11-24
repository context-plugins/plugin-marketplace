import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./unions/event.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";
import {
  warningsParallelAiMonitorApiSchema,
  type WarningsParallelAiMonitorApi,
} from "./unions/warnings-parallel-ai-monitor-api.js";

/** Paginated list of monitor events, newest first. */
export type PaginatedMonitorEvents = {
  /** Monitor events returned by this request, ordered newest first. */
  events: Event[];
  /** Pass as `cursor` to retrieve more events. Absent when there are no more events. */
  nextCursor?: NextCursor;
  /** Execution caveats for this page of events, e.g. compute limits. */
  warnings?: WarningsParallelAiMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedMonitorEventsSchema: Schema<PaginatedMonitorEvents> = s.object<PaginatedMonitorEvents>(
  {
    events: s.array(s.lazy(() => eventSchema)),
    nextCursor: s.optional(s.lazy(() => nextCursorSchema)),
    warnings: s.optional(s.lazy(() => warningsParallelAiMonitorApiSchema)),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
