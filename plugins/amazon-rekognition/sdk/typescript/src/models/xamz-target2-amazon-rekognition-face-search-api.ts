import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionFaceSearchApi = {
  RekognitionServiceSearchFacesByImage: "RekognitionService.SearchFacesByImage",
} as const;
export type XAmzTarget2AmazonRekognitionFaceSearchApi =
  | (typeof XAmzTarget2AmazonRekognitionFaceSearchApi)[keyof typeof XAmzTarget2AmazonRekognitionFaceSearchApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionFaceSearchApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionFaceSearchApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionFaceSearchApi>(XAmzTarget2AmazonRekognitionFaceSearchApi);
