import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Single destination dataset. */
export type SingleTargetDataset2 = {
  /**
   * The dataset ID of the target dataset. DatasetIds allowed characters:
   * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference.
   */
  datasetId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const singleTargetDataset2Schema: Schema<SingleTargetDataset2> = s.object<SingleTargetDataset2>(
  {
    datasetId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
