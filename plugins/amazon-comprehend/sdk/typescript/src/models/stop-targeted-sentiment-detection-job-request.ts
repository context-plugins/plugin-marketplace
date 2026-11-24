import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopTargetedSentimentDetectionJobRequest = {
  /** The identifier of the targeted sentiment detection job to stop. */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopTargetedSentimentDetectionJobRequestSchema: Schema<StopTargetedSentimentDetectionJobRequest> =
  s.object<StopTargetedSentimentDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
