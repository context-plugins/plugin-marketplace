import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopPiiEntitiesDetectionJobRequest = {
  /** The identifier of the PII entities detection job to stop. */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopPiiEntitiesDetectionJobRequestSchema: Schema<StopPiiEntitiesDetectionJobRequest> =
  s.object<StopPiiEntitiesDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
