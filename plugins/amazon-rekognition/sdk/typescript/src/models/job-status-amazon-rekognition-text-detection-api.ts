import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the text detection job. */
export const JobStatusAmazonRekognitionTextDetectionApi = {
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type JobStatusAmazonRekognitionTextDetectionApi =
  | (typeof JobStatusAmazonRekognitionTextDetectionApi)[keyof typeof JobStatusAmazonRekognitionTextDetectionApi]
  | (string & {});

export const jobStatusAmazonRekognitionTextDetectionApiSchema: EnumSchema<JobStatusAmazonRekognitionTextDetectionApi> =
  s.enumOf<JobStatusAmazonRekognitionTextDetectionApi>(JobStatusAmazonRekognitionTextDetectionApi);
