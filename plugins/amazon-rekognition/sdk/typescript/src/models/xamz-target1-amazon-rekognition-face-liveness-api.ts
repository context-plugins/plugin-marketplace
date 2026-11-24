import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionFaceLivenessApi = {
  RekognitionServiceGetFaceLivenessSessionResults: "RekognitionService.GetFaceLivenessSessionResults",
} as const;
export type XAmzTarget1AmazonRekognitionFaceLivenessApi =
  | (typeof XAmzTarget1AmazonRekognitionFaceLivenessApi)[keyof typeof XAmzTarget1AmazonRekognitionFaceLivenessApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionFaceLivenessApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionFaceLivenessApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionFaceLivenessApi>(XAmzTarget1AmazonRekognitionFaceLivenessApi);
