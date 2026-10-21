import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dedicatedDatasetModality1Schema,
  type DedicatedDatasetModality1,
} from "./dedicated-dataset-modality1.js";

/** Create dataset request. */
export type CreateDatasetRequest = {
  /** Name of the dataset. */
  name: string;
  /** ID of the project. */
  projectId: string;
  /** Modality of the dataset. */
  modality: DedicatedDatasetModality1;
};

export const createDatasetRequestSchema: Schema<CreateDatasetRequest> = s.object<CreateDatasetRequest>({
  name: s.string(),
  projectId: s.string(),
  modality: dedicatedDatasetModality1Schema,
});
