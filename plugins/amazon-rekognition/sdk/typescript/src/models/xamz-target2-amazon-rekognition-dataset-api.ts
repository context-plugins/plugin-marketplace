import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonRekognitionDatasetApi = {
  RekognitionServiceDescribeDataset: "RekognitionService.DescribeDataset",
} as const;
export type XAmzTarget2AmazonRekognitionDatasetApi =
  | (typeof XAmzTarget2AmazonRekognitionDatasetApi)[keyof typeof XAmzTarget2AmazonRekognitionDatasetApi]
  | (string & {});

export const xAmzTarget2AmazonRekognitionDatasetApiSchema: EnumSchema<XAmzTarget2AmazonRekognitionDatasetApi> =
  s.enumOf<XAmzTarget2AmazonRekognitionDatasetApi>(XAmzTarget2AmazonRekognitionDatasetApi);
