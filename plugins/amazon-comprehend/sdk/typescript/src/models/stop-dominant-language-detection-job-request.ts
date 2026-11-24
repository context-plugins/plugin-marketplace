import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopDominantLanguageDetectionJobRequest = {
  /** The identifier of the dominant language detection job to stop. */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopDominantLanguageDetectionJobRequestSchema: Schema<StopDominantLanguageDetectionJobRequest> =
  s.object<StopDominantLanguageDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
