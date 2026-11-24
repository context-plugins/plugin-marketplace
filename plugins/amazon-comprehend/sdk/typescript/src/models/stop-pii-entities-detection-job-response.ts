import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus31Schema, type JobStatus31 } from "./job-status31.js";

export type StopPiiEntitiesDetectionJobResponse = {
  /** The identifier of the PII entities detection job to stop. */
  jobId?: string;
  /** The status of the PII entities detection job. */
  jobStatus?: JobStatus31;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopPiiEntitiesDetectionJobResponseSchema: Schema<StopPiiEntitiesDetectionJobResponse> =
  s.object<StopPiiEntitiesDetectionJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus31Schema)),
      _keysMap: {
        jobId: "JobId",
        jobStatus: "JobStatus",
      },
    },
    { additionalProperties: s.json() },
  );
