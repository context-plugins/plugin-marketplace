import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the content moderation analysis job. */
export const JobStatusAmazonRekognitionContentModerationApi = {
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type JobStatusAmazonRekognitionContentModerationApi =
  | (typeof JobStatusAmazonRekognitionContentModerationApi)[keyof typeof JobStatusAmazonRekognitionContentModerationApi]
  | (string & {});

export const jobStatusAmazonRekognitionContentModerationApiSchema: EnumSchema<JobStatusAmazonRekognitionContentModerationApi> =
  s.enumOf<JobStatusAmazonRekognitionContentModerationApi>(JobStatusAmazonRekognitionContentModerationApi);
