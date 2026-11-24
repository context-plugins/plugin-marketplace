import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The dataset type. You can specify that the data in a dataset is for training the model or for
 * testing the model.
 */
export const DatasetType = {
  Train: "TRAIN",
  Test: "TEST",
} as const;
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType] | (string & {});

export const datasetTypeSchema: EnumSchema<DatasetType> = s.enumOf<DatasetType>(DatasetType);
