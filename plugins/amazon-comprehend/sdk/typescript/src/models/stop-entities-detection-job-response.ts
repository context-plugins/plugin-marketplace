import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus28Schema, type JobStatus28 } from "./job-status28.js";

export type StopEntitiesDetectionJobResponse = {
  /** The identifier of the entities detection job to stop. */
  jobId?: string;
  /**
   * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously
   * stopped with the StopEntitiesDetectionJob operation.
   */
  jobStatus?: JobStatus28;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopEntitiesDetectionJobResponseSchema: Schema<StopEntitiesDetectionJobResponse> =
  s.object<StopEntitiesDetectionJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus28Schema)),
      _keysMap: {
        jobId: "JobId",
        jobStatus: "JobStatus",
      },
    },
    { additionalProperties: s.json() },
  );
