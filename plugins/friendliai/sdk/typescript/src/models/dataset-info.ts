import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dedicatedDatasetModality1Schema,
  type DedicatedDatasetModality1,
} from "./dedicated-dataset-modality1.js";

/** Dataset info. */
export type DatasetInfo = {
  /** ID of the dataset. */
  id: string;
  /** Name of the dataset. */
  name: string;
  /** Unix timestamp (in seconds) of when the dataset was created. */
  createdAt: number;
  /** Unix timestamp (in seconds) of when the dataset was last modified. */
  updatedAt: number;
  /** Modality of the dataset. */
  modality: DedicatedDatasetModality1;
};

export const datasetInfoSchema: Schema<DatasetInfo> = s.object<DatasetInfo>({
  id: s.string(),
  name: s.string(),
  createdAt: s.int(),
  updatedAt: s.int(),
  modality: dedicatedDatasetModality1Schema,
});
