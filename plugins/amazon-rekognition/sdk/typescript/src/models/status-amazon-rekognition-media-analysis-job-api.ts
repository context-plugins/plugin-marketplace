import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the media analysis job. */
export const StatusAmazonRekognitionMediaAnalysisJobApi = {
  Created: "CREATED",
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type StatusAmazonRekognitionMediaAnalysisJobApi =
  | (typeof StatusAmazonRekognitionMediaAnalysisJobApi)[keyof typeof StatusAmazonRekognitionMediaAnalysisJobApi]
  | (string & {});

export const statusAmazonRekognitionMediaAnalysisJobApiSchema: EnumSchema<StatusAmazonRekognitionMediaAnalysisJobApi> =
  s.enumOf<StatusAmazonRekognitionMediaAnalysisJobApi>(StatusAmazonRekognitionMediaAnalysisJobApi);
