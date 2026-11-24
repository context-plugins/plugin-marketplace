import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonRekognitionDatasetApi = {
  RekognitionServiceCreateDataset: "RekognitionService.CreateDataset",
} as const;
export type XAmzTargetAmazonRekognitionDatasetApi =
  | (typeof XAmzTargetAmazonRekognitionDatasetApi)[keyof typeof XAmzTargetAmazonRekognitionDatasetApi]
  | (string & {});

export const xAmzTargetAmazonRekognitionDatasetApiSchema: EnumSchema<XAmzTargetAmazonRekognitionDatasetApi> =
  s.enumOf<XAmzTargetAmazonRekognitionDatasetApi>(XAmzTargetAmazonRekognitionDatasetApi);
