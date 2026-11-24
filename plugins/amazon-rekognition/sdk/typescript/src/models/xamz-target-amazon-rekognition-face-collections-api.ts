import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionFaceCollectionsApi = {
  RekognitionServiceIndexFaces: "RekognitionService.IndexFaces",
} as const;
export type XAmzTargetAmazonRekognitionFaceCollectionsApi =
  | (typeof XAmzTargetAmazonRekognitionFaceCollectionsApi)[keyof typeof XAmzTargetAmazonRekognitionFaceCollectionsApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionFaceCollectionsApiSchema: EnumSchema<XAmzTargetAmazonRekognitionFaceCollectionsApi> =
  s.enumOf<XAmzTargetAmazonRekognitionFaceCollectionsApi>(XAmzTargetAmazonRekognitionFaceCollectionsApi);
