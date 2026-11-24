import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus27Schema, type JobStatus27 } from "./job-status27.js";

export type StopDominantLanguageDetectionJobResponse = {
  /** The identifier of the dominant language detection job to stop. */
  jobId?: string;
  /**
   * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously
   * stopped with the StopDominantLanguageDetectionJob operation.
   */
  jobStatus?: JobStatus27;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopDominantLanguageDetectionJobResponseSchema: Schema<StopDominantLanguageDetectionJobResponse> =
  s.object<StopDominantLanguageDetectionJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus27Schema)),
      _keysMap: {
        jobId: "JobId",
        jobStatus: "JobStatus",
      },
    },
    { additionalProperties: s.json() },
  );
