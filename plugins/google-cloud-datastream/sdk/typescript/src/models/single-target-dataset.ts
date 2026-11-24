import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single target dataset to which all data will be streamed. */
export type SingleTargetDataset = {
  /**
   * The dataset ID of the target dataset. DatasetIds allowed characters:
   * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference.
   */
  datasetId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const singleTargetDatasetSchema: Schema<SingleTargetDataset> = s.object<SingleTargetDataset>(
  {
    datasetId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
