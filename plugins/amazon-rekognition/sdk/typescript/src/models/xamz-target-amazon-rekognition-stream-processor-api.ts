import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionStreamProcessorApi = {
  RekognitionServiceCreateStreamProcessor: "RekognitionService.CreateStreamProcessor",
} as const;
export type XAmzTargetAmazonRekognitionStreamProcessorApi =
  | (typeof XAmzTargetAmazonRekognitionStreamProcessorApi)[keyof typeof XAmzTargetAmazonRekognitionStreamProcessorApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionStreamProcessorApiSchema: EnumSchema<XAmzTargetAmazonRekognitionStreamProcessorApi> =
  s.enumOf<XAmzTargetAmazonRekognitionStreamProcessorApi>(XAmzTargetAmazonRekognitionStreamProcessorApi);
