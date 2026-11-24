import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Kind2, kind2Schema } from "./kind2.js";
import { monitorMemoryEventSchema, type MonitorMemoryEvent } from "./monitor-memory-event.js";
import {
  statusParallelAiMemoryApiSchema,
  type StatusParallelAiMemoryApi,
} from "./status-parallel-ai-memory-api.js";

export type MonitorMemoryResult = {
  /** @default Kind2.Monitor */
  kind?: Kind2;
  /** ID of the monitor. */
  id: string;
  /** When the monitor last ran, as an RFC 3339 timestamp. */
  updatedAt: Date;
  /** Preview of the monitor's query. May be truncated. */
  inputExcerpt: string;
  /** Current status of the monitor. */
  status: StatusParallelAiMemoryApi;
  /**
   * Detected events matching the retrieval query, ordered by relevance with more recent events
   * favored. For an empty query, events are ordered by recency.
   */
  matchedEvents?: MonitorMemoryEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorMemoryResultSchema: Schema<MonitorMemoryResult> = s.object<MonitorMemoryResult>(
  {
    kind: s.defaulted(kind2Schema, Kind2.Monitor),
    id: s.string(),
    updatedAt: s.dateTime(),
    inputExcerpt: s.string(),
    status: statusParallelAiMemoryApiSchema,
    matchedEvents: s.optional(s.array(s.lazy(() => monitorMemoryEventSchema))),
    _keysMap: {
      updatedAt: "updated_at",
      inputExcerpt: "input_excerpt",
      matchedEvents: "matched_events",
    },
  },
  { additionalProperties: s.json() },
);
