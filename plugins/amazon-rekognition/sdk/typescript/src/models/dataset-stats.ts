import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetStats = {
  /** The total number of images in the dataset that have labels. */
  labeledEntries?: number;
  /** The total number of images in the dataset. */
  totalEntries?: number;
  /** The total number of labels declared in the dataset. */
  totalLabels?: number;
  /** The total number of entries that contain at least one error. */
  errorEntries?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetStatsSchema: Schema<DatasetStats> = s.object<DatasetStats>(
  {
    labeledEntries: s.optional(s.int()),
    totalEntries: s.optional(s.int()),
    totalLabels: s.optional(s.int()),
    errorEntries: s.optional(s.int()),
    _keysMap: {
      labeledEntries: "LabeledEntries",
      totalEntries: "TotalEntries",
      totalLabels: "TotalLabels",
      errorEntries: "ErrorEntries",
    },
  },
  { additionalProperties: s.json() },
);
