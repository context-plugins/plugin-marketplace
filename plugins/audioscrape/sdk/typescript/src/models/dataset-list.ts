import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetSummarySchema, type DatasetSummary } from "./dataset-summary.js";

export type DatasetList = {
  datasets: DatasetSummary[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetListSchema: Schema<DatasetList> = s.object<DatasetList>(
  {
    datasets: s.array(s.lazy(() => datasetSummarySchema)),
    total: s.int(),
  },
  { additionalProperties: s.json() },
);
