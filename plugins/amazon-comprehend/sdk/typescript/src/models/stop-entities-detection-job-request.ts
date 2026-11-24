import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopEntitiesDetectionJobRequest = {
  /** The identifier of the entities detection job to stop. */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopEntitiesDetectionJobRequestSchema: Schema<StopEntitiesDetectionJobRequest> =
  s.object<StopEntitiesDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
