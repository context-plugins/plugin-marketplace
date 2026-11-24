import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionStreamProcessorApi = {
  RekognitionServiceDescribeStreamProcessor: "RekognitionService.DescribeStreamProcessor",
} as const;
export type XAmzTarget2AmazonRekognitionStreamProcessorApi =
  | (typeof XAmzTarget2AmazonRekognitionStreamProcessorApi)[keyof typeof XAmzTarget2AmazonRekognitionStreamProcessorApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionStreamProcessorApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionStreamProcessorApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionStreamProcessorApi>(XAmzTarget2AmazonRekognitionStreamProcessorApi);
