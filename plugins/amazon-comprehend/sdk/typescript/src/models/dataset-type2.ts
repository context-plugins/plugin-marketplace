import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The dataset type (training data or test data). */
export const DatasetType2 = {
  Train: "TRAIN",
  Test: "TEST",
} as const;
export type DatasetType2 = (typeof DatasetType2)[keyof typeof DatasetType2] | (string & {});

export const datasetType2Schema: EnumSchema<DatasetType2> = s.enumOf<DatasetType2>(DatasetType2);
