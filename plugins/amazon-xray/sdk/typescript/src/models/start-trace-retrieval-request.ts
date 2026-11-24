import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartTraceRetrievalRequest = {
  /** Specify the trace IDs of the traces to be retrieved. */
  traceIds: string[];
  /**
   * The start of the time range to retrieve traces. The range is inclusive, so the specified start
   * time is included in the query. Specified as epoch time, the number of seconds since January 1,
   * 1970, 00:00:00 UTC.
   */
  startTime: Date;
  /**
   * The end of the time range to retrieve traces. The range is inclusive, so the specified end time
   * is included in the query. Specified as epoch time, the number of seconds since January 1, 1970,
   * 00:00:00 UTC.
   */
  endTime: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTraceRetrievalRequestSchema: Schema<StartTraceRetrievalRequest> =
  s.object<StartTraceRetrievalRequest>(
    {
      traceIds: s.array(s.string()),
      startTime: s.dateTime(),
      endTime: s.dateTime(),
      _keysMap: {
        traceIds: "TraceIds",
        startTime: "StartTime",
        endTime: "EndTime",
      },
    },
    { additionalProperties: s.json() },
  );
