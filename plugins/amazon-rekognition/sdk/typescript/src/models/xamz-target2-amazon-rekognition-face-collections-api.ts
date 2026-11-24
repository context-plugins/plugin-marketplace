import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionFaceCollectionsApi = {
  RekognitionServiceListCollections: "RekognitionService.ListCollections",
} as const;
export type XAmzTarget2AmazonRekognitionFaceCollectionsApi =
  | (typeof XAmzTarget2AmazonRekognitionFaceCollectionsApi)[keyof typeof XAmzTarget2AmazonRekognitionFaceCollectionsApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionFaceCollectionsApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionFaceCollectionsApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionFaceCollectionsApi>(XAmzTarget2AmazonRekognitionFaceCollectionsApi);
