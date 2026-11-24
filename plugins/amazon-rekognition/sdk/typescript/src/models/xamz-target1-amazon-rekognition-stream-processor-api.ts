import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionStreamProcessorApi = {
  RekognitionServiceDeleteStreamProcessor: "RekognitionService.DeleteStreamProcessor",
} as const;
export type XAmzTarget1AmazonRekognitionStreamProcessorApi =
  | (typeof XAmzTarget1AmazonRekognitionStreamProcessorApi)[keyof typeof XAmzTarget1AmazonRekognitionStreamProcessorApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionStreamProcessorApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionStreamProcessorApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionStreamProcessorApi>(XAmzTarget1AmazonRekognitionStreamProcessorApi);
