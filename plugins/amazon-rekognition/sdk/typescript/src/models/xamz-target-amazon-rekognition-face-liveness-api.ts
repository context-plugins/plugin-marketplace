import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionFaceLivenessApi = {
  RekognitionServiceCreateFaceLivenessSession: "RekognitionService.CreateFaceLivenessSession",
} as const;
export type XAmzTargetAmazonRekognitionFaceLivenessApi =
  | (typeof XAmzTargetAmazonRekognitionFaceLivenessApi)[keyof typeof XAmzTargetAmazonRekognitionFaceLivenessApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionFaceLivenessApiSchema: EnumSchema<XAmzTargetAmazonRekognitionFaceLivenessApi> =
  s.enumOf<XAmzTargetAmazonRekognitionFaceLivenessApi>(XAmzTargetAmazonRekognitionFaceLivenessApi);
