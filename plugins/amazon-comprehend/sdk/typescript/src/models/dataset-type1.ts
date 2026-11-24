import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter the datasets based on the dataset type. */
export const DatasetType1 = {
  Train: "TRAIN",
  Test: "TEST",
} as const;
export type DatasetType1 = (typeof DatasetType1)[keyof typeof DatasetType1] | (string & {});

export const datasetType1Schema: EnumSchema<DatasetType1> = s.enumOf<DatasetType1>(DatasetType1);
