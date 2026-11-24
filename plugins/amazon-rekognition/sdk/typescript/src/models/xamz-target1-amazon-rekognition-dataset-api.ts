import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonRekognitionDatasetApi = {
  RekognitionServiceDeleteDataset: "RekognitionService.DeleteDataset",
} as const;
export type XAmzTarget1AmazonRekognitionDatasetApi =
  | (typeof XAmzTarget1AmazonRekognitionDatasetApi)[keyof typeof XAmzTarget1AmazonRekognitionDatasetApi]
  | (string & {});

export const xAmzTarget1AmazonRekognitionDatasetApiSchema: EnumSchema<XAmzTarget1AmazonRekognitionDatasetApi> =
  s.enumOf<XAmzTarget1AmazonRekognitionDatasetApi>(XAmzTarget1AmazonRekognitionDatasetApi);
