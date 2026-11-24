import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TraceLogsResponse = {
  traceId: string;
  logs: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceLogsResponseSchema: Schema<TraceLogsResponse> = s.object<TraceLogsResponse>(
  {
    traceId: s.string(),
    logs: s.string(),
    _keysMap: {
      traceId: "trace_id",
    },
  },
  { additionalProperties: s.json() },
);
