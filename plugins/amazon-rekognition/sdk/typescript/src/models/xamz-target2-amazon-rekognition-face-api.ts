import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionFaceApi = {
  RekognitionServiceDisassociateFaces: "RekognitionService.DisassociateFaces",
} as const;
export type XAmzTarget2AmazonRekognitionFaceApi =
  | (typeof XAmzTarget2AmazonRekognitionFaceApi)[keyof typeof XAmzTarget2AmazonRekognitionFaceApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionFaceApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionFaceApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionFaceApi>(XAmzTarget2AmazonRekognitionFaceApi);
