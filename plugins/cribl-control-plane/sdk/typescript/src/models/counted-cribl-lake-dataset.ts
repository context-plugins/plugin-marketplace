import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { criblLakeDatasetSchema, type CriblLakeDataset } from "./cribl-lake-dataset.js";

export type CountedCriblLakeDataset = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: CriblLakeDataset[];
};

export const countedCriblLakeDatasetSchema: Schema<CountedCriblLakeDataset> =
  s.object<CountedCriblLakeDataset>({
    count: s.int(),
    items: s.array(s.lazy(() => criblLakeDatasetSchema)),
  });
