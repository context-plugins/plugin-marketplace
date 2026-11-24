import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget6AmazonRekognitionStreamProcessorApi = {
  RekognitionServiceUpdateStreamProcessor: "RekognitionService.UpdateStreamProcessor",
} as const;
export type XAmzTarget6AmazonRekognitionStreamProcessorApi =
  | (typeof XAmzTarget6AmazonRekognitionStreamProcessorApi)[keyof typeof XAmzTarget6AmazonRekognitionStreamProcessorApi]
  | (string & {});

export const xAmzTarget6AmazonRekognitionStreamProcessorApiSchema: EnumSchema<XAmzTarget6AmazonRekognitionStreamProcessorApi> =
  s.enumOf<XAmzTarget6AmazonRekognitionStreamProcessorApi>(XAmzTarget6AmazonRekognitionStreamProcessorApi);
