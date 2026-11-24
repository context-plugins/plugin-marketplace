import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonRekognitionOperationsApi = {
  RekognitionServiceDetectFaces: "RekognitionService.DetectFaces",
} as const;
export type XAmzTarget3AmazonRekognitionOperationsApi =
  | (typeof XAmzTarget3AmazonRekognitionOperationsApi)[keyof typeof XAmzTarget3AmazonRekognitionOperationsApi]
  | (string & {});

export const xAmzTarget3AmazonRekognitionOperationsApiSchema: EnumSchema<XAmzTarget3AmazonRekognitionOperationsApi> =
  s.enumOf<XAmzTarget3AmazonRekognitionOperationsApi>(XAmzTarget3AmazonRekognitionOperationsApi);
