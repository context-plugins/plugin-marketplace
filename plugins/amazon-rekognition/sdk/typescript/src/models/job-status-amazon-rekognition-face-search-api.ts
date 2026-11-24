import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the face search job. */
export const JobStatusAmazonRekognitionFaceSearchApi = {
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type JobStatusAmazonRekognitionFaceSearchApi =
  | (typeof JobStatusAmazonRekognitionFaceSearchApi)[keyof typeof JobStatusAmazonRekognitionFaceSearchApi]
  | (string & {});

export const jobStatusAmazonRekognitionFaceSearchApiSchema: EnumSchema<JobStatusAmazonRekognitionFaceSearchApi> =
  s.enumOf<JobStatusAmazonRekognitionFaceSearchApi>(JobStatusAmazonRekognitionFaceSearchApi);
