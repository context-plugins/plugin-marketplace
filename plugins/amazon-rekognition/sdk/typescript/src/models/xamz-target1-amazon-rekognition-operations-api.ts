import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionOperationsApi = {
  RekognitionServiceCopyProjectVersion: "RekognitionService.CopyProjectVersion",
} as const;
export type XAmzTarget1AmazonRekognitionOperationsApi =
  | (typeof XAmzTarget1AmazonRekognitionOperationsApi)[keyof typeof XAmzTarget1AmazonRekognitionOperationsApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionOperationsApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionOperationsApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionOperationsApi>(XAmzTarget1AmazonRekognitionOperationsApi);
