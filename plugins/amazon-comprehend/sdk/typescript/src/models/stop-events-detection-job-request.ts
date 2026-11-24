import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopEventsDetectionJobRequest = {
  /** The identifier of the events detection job to stop. */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopEventsDetectionJobRequestSchema: Schema<StopEventsDetectionJobRequest> =
  s.object<StopEventsDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
