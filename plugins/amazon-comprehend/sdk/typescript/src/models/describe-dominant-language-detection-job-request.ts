import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeDominantLanguageDetectionJobRequest = {
  /**
   * The identifier that Amazon Comprehend generated for the job. The
   * StartDominantLanguageDetectionJob operation returns this identifier in its response.
   */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDominantLanguageDetectionJobRequestSchema: Schema<DescribeDominantLanguageDetectionJobRequest> =
  s.object<DescribeDominantLanguageDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
