import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopKeyPhrasesDetectionJobRequest = {
  /** The identifier of the key phrases detection job to stop. */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopKeyPhrasesDetectionJobRequestSchema: Schema<StopKeyPhrasesDetectionJobRequest> =
  s.object<StopKeyPhrasesDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
