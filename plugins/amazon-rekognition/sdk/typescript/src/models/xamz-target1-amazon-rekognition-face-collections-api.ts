import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionFaceCollectionsApi = {
  RekognitionServiceCreateCollection: "RekognitionService.CreateCollection",
} as const;
export type XAmzTarget1AmazonRekognitionFaceCollectionsApi =
  | (typeof XAmzTarget1AmazonRekognitionFaceCollectionsApi)[keyof typeof XAmzTarget1AmazonRekognitionFaceCollectionsApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionFaceCollectionsApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionFaceCollectionsApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionFaceCollectionsApi>(XAmzTarget1AmazonRekognitionFaceCollectionsApi);
