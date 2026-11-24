import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5AmazonRekognitionStreamProcessorApi = {
  RekognitionServiceStopStreamProcessor: "RekognitionService.StopStreamProcessor",
} as const;
export type XAmzTarget5AmazonRekognitionStreamProcessorApi =
  | (typeof XAmzTarget5AmazonRekognitionStreamProcessorApi)[keyof typeof XAmzTarget5AmazonRekognitionStreamProcessorApi]
  | (string & {});

export const xAmzTarget5AmazonRekognitionStreamProcessorApiSchema: EnumSchema<XAmzTarget5AmazonRekognitionStreamProcessorApi> =
  s.enumOf<XAmzTarget5AmazonRekognitionStreamProcessorApi>(XAmzTarget5AmazonRekognitionStreamProcessorApi);
