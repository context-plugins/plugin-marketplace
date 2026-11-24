import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionContentModerationApi = {
  RekognitionServiceStartContentModeration: "RekognitionService.StartContentModeration",
} as const;
export type XAmzTarget1AmazonRekognitionContentModerationApi =
  | (typeof XAmzTarget1AmazonRekognitionContentModerationApi)[keyof typeof XAmzTarget1AmazonRekognitionContentModerationApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionContentModerationApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionContentModerationApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionContentModerationApi>(
    XAmzTarget1AmazonRekognitionContentModerationApi,
  );
