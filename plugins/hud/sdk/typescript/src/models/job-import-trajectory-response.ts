import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JobImportTrajectoryResponse = {
  traceId: string;
  /** Telemetry spans the trajectory became */
  spanCount: number;
  /** False when the trace already had a trajectory */
  ingested: boolean;
  /** Trajectory references stored but not fetched */
  warnings: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobImportTrajectoryResponseSchema: Schema<JobImportTrajectoryResponse> =
  s.object<JobImportTrajectoryResponse>(
    {
      traceId: s.string(),
      spanCount: s.int(),
      ingested: s.boolean(),
      warnings: s.array(s.string()),
      _keysMap: {
        traceId: "trace_id",
        spanCount: "span_count",
      },
    },
    { additionalProperties: s.json() },
  );
