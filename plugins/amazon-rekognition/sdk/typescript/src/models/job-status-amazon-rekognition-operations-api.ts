import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the face detection job. */
export const JobStatusAmazonRekognitionOperationsApi = {
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type JobStatusAmazonRekognitionOperationsApi =
  | (typeof JobStatusAmazonRekognitionOperationsApi)[keyof typeof JobStatusAmazonRekognitionOperationsApi]
  | (string & {});

export const jobStatusAmazonRekognitionOperationsApiSchema: EnumSchema<JobStatusAmazonRekognitionOperationsApi> =
  s.enumOf<JobStatusAmazonRekognitionOperationsApi>(JobStatusAmazonRekognitionOperationsApi);
