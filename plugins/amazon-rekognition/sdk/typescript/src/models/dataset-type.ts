import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the dataset. Specify TRAIN to create a training dataset. Specify TEST to create a
 * test dataset.
 */
export const DatasetType = {
  Train: "TRAIN",
  Test: "TEST",
} as const;
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType] | (string & {});

export const datasetTypeSchema: EnumSchema<DatasetType> = s.enumOf<DatasetType>(DatasetType);
