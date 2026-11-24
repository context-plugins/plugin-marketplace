import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { distributeDatasetSchema, type DistributeDataset } from "./distribute-dataset.js";

export type DistributeDatasetEntriesRequest = {
  /**
   * The ARNS for the training dataset and test dataset that you want to use. The datasets must
   * belong to the same project. The test dataset must be empty.
   */
  datasets: DistributeDataset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const distributeDatasetEntriesRequestSchema: Schema<DistributeDatasetEntriesRequest> =
  s.object<DistributeDatasetEntriesRequest>(
    {
      datasets: s.array(s.lazy(() => distributeDatasetSchema)),
      _keysMap: {
        datasets: "Datasets",
      },
    },
    { additionalProperties: s.json() },
  );
