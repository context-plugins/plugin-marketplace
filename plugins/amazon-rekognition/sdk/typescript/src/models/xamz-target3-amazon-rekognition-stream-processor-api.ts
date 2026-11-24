import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonRekognitionStreamProcessorApi = {
  RekognitionServiceListStreamProcessors: "RekognitionService.ListStreamProcessors",
} as const;
export type XAmzTarget3AmazonRekognitionStreamProcessorApi =
  | (typeof XAmzTarget3AmazonRekognitionStreamProcessorApi)[keyof typeof XAmzTarget3AmazonRekognitionStreamProcessorApi]
  | (string & {});

export const xAmzTarget3AmazonRekognitionStreamProcessorApiSchema: EnumSchema<XAmzTarget3AmazonRekognitionStreamProcessorApi> =
  s.enumOf<XAmzTarget3AmazonRekognitionStreamProcessorApi>(XAmzTarget3AmazonRekognitionStreamProcessorApi);
