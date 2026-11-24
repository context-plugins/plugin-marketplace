import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the label detection job. */
export const JobStatusAmazonRekognitionStoredVideoAnalysisApi = {
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type JobStatusAmazonRekognitionStoredVideoAnalysisApi =
  | (typeof JobStatusAmazonRekognitionStoredVideoAnalysisApi)[keyof typeof JobStatusAmazonRekognitionStoredVideoAnalysisApi]
  | (string & {});

export const jobStatusAmazonRekognitionStoredVideoAnalysisApiSchema: EnumSchema<JobStatusAmazonRekognitionStoredVideoAnalysisApi> =
  s.enumOf<JobStatusAmazonRekognitionStoredVideoAnalysisApi>(
    JobStatusAmazonRekognitionStoredVideoAnalysisApi,
  );
