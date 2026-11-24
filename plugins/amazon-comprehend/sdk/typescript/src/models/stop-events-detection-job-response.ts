import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus21Schema, type JobStatus21 } from "./job-status21.js";

export type StopEventsDetectionJobResponse = {
  /** The identifier of the events detection job to stop. */
  jobId?: string;
  /** The status of the events detection job. */
  jobStatus?: JobStatus21;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopEventsDetectionJobResponseSchema: Schema<StopEventsDetectionJobResponse> =
  s.object<StopEventsDetectionJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus21Schema)),
      _keysMap: {
        jobId: "JobId",
        jobStatus: "JobStatus",
      },
    },
    { additionalProperties: s.json() },
  );
