import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Represents a status corresponding to the state of the session. Possible statuses are: CREATED,
 * IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED.
 */
export const StatusAmazonRekognitionFaceLivenessApi = {
  Created: "CREATED",
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Expired: "EXPIRED",
} as const;
export type StatusAmazonRekognitionFaceLivenessApi =
  | (typeof StatusAmazonRekognitionFaceLivenessApi)[keyof typeof StatusAmazonRekognitionFaceLivenessApi]
  | (string & {});

export const statusAmazonRekognitionFaceLivenessApiSchema: EnumSchema<StatusAmazonRekognitionFaceLivenessApi> =
  s.enumOf<StatusAmazonRekognitionFaceLivenessApi>(StatusAmazonRekognitionFaceLivenessApi);
