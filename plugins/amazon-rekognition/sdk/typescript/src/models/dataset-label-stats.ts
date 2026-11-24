import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetLabelStats = {
  /** The total number of images that use the label. */
  entryCount?: number;
  /** The total number of images that have the label assigned to a bounding box. */
  boundingBoxCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetLabelStatsSchema: Schema<DatasetLabelStats> = s.object<DatasetLabelStats>(
  {
    entryCount: s.optional(s.int()),
    boundingBoxCount: s.optional(s.int()),
    _keysMap: {
      entryCount: "EntryCount",
      boundingBoxCount: "BoundingBoxCount",
    },
  },
  { additionalProperties: s.json() },
);
