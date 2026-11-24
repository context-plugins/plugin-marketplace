import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionContentModerationApi = {
  RekognitionServiceGetContentModeration: "RekognitionService.GetContentModeration",
} as const;
export type XAmzTargetAmazonRekognitionContentModerationApi =
  | (typeof XAmzTargetAmazonRekognitionContentModerationApi)[keyof typeof XAmzTargetAmazonRekognitionContentModerationApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionContentModerationApiSchema: EnumSchema<XAmzTargetAmazonRekognitionContentModerationApi> =
  s.enumOf<XAmzTargetAmazonRekognitionContentModerationApi>(XAmzTargetAmazonRekognitionContentModerationApi);
