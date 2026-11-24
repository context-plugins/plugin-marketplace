import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionFaceApi = {
  RekognitionServiceDeleteFaces: "RekognitionService.DeleteFaces",
} as const;
export type XAmzTarget1AmazonRekognitionFaceApi =
  | (typeof XAmzTarget1AmazonRekognitionFaceApi)[keyof typeof XAmzTarget1AmazonRekognitionFaceApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionFaceApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionFaceApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionFaceApi>(XAmzTarget1AmazonRekognitionFaceApi);
