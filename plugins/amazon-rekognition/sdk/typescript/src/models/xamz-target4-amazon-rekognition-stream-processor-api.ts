import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonRekognitionStreamProcessorApi = {
  RekognitionServiceStartStreamProcessor: "RekognitionService.StartStreamProcessor",
} as const;
export type XAmzTarget4AmazonRekognitionStreamProcessorApi =
  | (typeof XAmzTarget4AmazonRekognitionStreamProcessorApi)[keyof typeof XAmzTarget4AmazonRekognitionStreamProcessorApi]
  | (string & {});

export const xAmzTarget4AmazonRekognitionStreamProcessorApiSchema: EnumSchema<XAmzTarget4AmazonRekognitionStreamProcessorApi> =
  s.enumOf<XAmzTarget4AmazonRekognitionStreamProcessorApi>(XAmzTarget4AmazonRekognitionStreamProcessorApi);
