import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionContentModerationApi = {
  RekognitionServiceDetectModerationLabels: "RekognitionService.DetectModerationLabels",
} as const;
export type XAmzTarget2AmazonRekognitionContentModerationApi =
  | (typeof XAmzTarget2AmazonRekognitionContentModerationApi)[keyof typeof XAmzTarget2AmazonRekognitionContentModerationApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionContentModerationApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionContentModerationApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionContentModerationApi>(
    XAmzTarget2AmazonRekognitionContentModerationApi,
  );
