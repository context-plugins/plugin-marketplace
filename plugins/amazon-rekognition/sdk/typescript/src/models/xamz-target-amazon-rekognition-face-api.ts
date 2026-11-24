import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionFaceApi = {
  RekognitionServiceAssociateFaces: "RekognitionService.AssociateFaces",
} as const;
export type XAmzTargetAmazonRekognitionFaceApi =
  | (typeof XAmzTargetAmazonRekognitionFaceApi)[keyof typeof XAmzTargetAmazonRekognitionFaceApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionFaceApiSchema: EnumSchema<XAmzTargetAmazonRekognitionFaceApi> =
  s.enumOf<XAmzTargetAmazonRekognitionFaceApi>(XAmzTargetAmazonRekognitionFaceApi);
