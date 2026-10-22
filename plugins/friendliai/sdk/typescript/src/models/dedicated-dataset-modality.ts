import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dedicatedDatasetModalityTypeSchema,
  type DedicatedDatasetModalityType,
} from "./dedicated-dataset-modality-type.js";

/** Dataset modality. */
export type DedicatedDatasetModality = {
  inputModals?: DedicatedDatasetModalityType[];
  outputModals?: DedicatedDatasetModalityType[];
};

export const dedicatedDatasetModalitySchema: Schema<DedicatedDatasetModality> =
  s.object<DedicatedDatasetModality>({
    inputModals: s.optional(s.array(s.lazy(() => dedicatedDatasetModalityTypeSchema))),
    outputModals: s.optional(s.array(s.lazy(() => dedicatedDatasetModalityTypeSchema))),
    _keysMap: {
      inputModals: "input_modals",
      outputModals: "output_modals",
    },
  });
