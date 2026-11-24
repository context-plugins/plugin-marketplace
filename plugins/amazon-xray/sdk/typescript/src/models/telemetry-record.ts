import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { backendConnectionErrorsSchema, type BackendConnectionErrors } from "./backend-connection-errors.js";

export type TelemetryRecord = {
  timestamp: Date;
  segmentsReceivedCount?: number;
  segmentsSentCount?: number;
  segmentsSpilloverCount?: number;
  segmentsRejectedCount?: number;
  backendConnectionErrors?: BackendConnectionErrors;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const telemetryRecordSchema: Schema<TelemetryRecord> = s.object<TelemetryRecord>(
  {
    timestamp: s.dateTime(),
    segmentsReceivedCount: s.optional(s.int()),
    segmentsSentCount: s.optional(s.int()),
    segmentsSpilloverCount: s.optional(s.int()),
    segmentsRejectedCount: s.optional(s.int()),
    backendConnectionErrors: s.optional(s.lazy(() => backendConnectionErrorsSchema)),
    _keysMap: {
      timestamp: "Timestamp",
      segmentsReceivedCount: "SegmentsReceivedCount",
      segmentsSentCount: "SegmentsSentCount",
      segmentsSpilloverCount: "SegmentsSpilloverCount",
      segmentsRejectedCount: "SegmentsRejectedCount",
      backendConnectionErrors: "BackendConnectionErrors",
    },
  },
  { additionalProperties: s.json() },
);
