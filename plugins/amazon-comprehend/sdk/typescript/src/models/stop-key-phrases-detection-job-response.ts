import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus30Schema, type JobStatus30 } from "./job-status30.js";

export type StopKeyPhrasesDetectionJobResponse = {
  /** The identifier of the key phrases detection job to stop. */
  jobId?: string;
  /**
   * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously
   * stopped with the StopKeyPhrasesDetectionJob operation.
   */
  jobStatus?: JobStatus30;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopKeyPhrasesDetectionJobResponseSchema: Schema<StopKeyPhrasesDetectionJobResponse> =
  s.object<StopKeyPhrasesDetectionJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus30Schema)),
      _keysMap: {
        jobId: "JobId",
        jobStatus: "JobStatus",
      },
    },
    { additionalProperties: s.json() },
  );
