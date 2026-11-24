import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the dataset. */
export const DatasetTypeAmazonRekognitionProjectApi = {
  Train: "TRAIN",
  Test: "TEST",
} as const;
export type DatasetTypeAmazonRekognitionProjectApi =
  | (typeof DatasetTypeAmazonRekognitionProjectApi)[keyof typeof DatasetTypeAmazonRekognitionProjectApi]
  | (string & {});

export const datasetTypeAmazonRekognitionProjectApiSchema: EnumSchema<DatasetTypeAmazonRekognitionProjectApi> =
  s.enumOf<DatasetTypeAmazonRekognitionProjectApi>(DatasetTypeAmazonRekognitionProjectApi);
