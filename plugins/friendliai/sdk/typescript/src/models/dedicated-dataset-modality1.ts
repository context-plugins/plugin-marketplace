import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dedicatedDatasetModalityTypeSchema,
  type DedicatedDatasetModalityType,
} from "./dedicated-dataset-modality-type.js";

/** Modality of the dataset. */
export type DedicatedDatasetModality1 = {
  inputModals?: DedicatedDatasetModalityType[];
  outputModals?: DedicatedDatasetModalityType[];
};

export const dedicatedDatasetModality1Schema: Schema<DedicatedDatasetModality1> =
  s.object<DedicatedDatasetModality1>({
    inputModals: s.optional(s.array(s.lazy(() => dedicatedDatasetModalityTypeSchema))),
    outputModals: s.optional(s.array(s.lazy(() => dedicatedDatasetModalityTypeSchema))),
    _keysMap: {
      inputModals: "input_modals",
      outputModals: "output_modals",
    },
  });
