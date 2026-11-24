import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetLabelStatsSchema, type DatasetLabelStats } from "./dataset-label-stats.js";

export type DatasetLabelDescription = {
  /** The name of the label. */
  labelName?: string;
  labelStats?: DatasetLabelStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetLabelDescriptionSchema: Schema<DatasetLabelDescription> =
  s.object<DatasetLabelDescription>(
    {
      labelName: s.optional(s.string()),
      labelStats: s.optional(s.lazy(() => datasetLabelStatsSchema)),
      _keysMap: {
        labelName: "LabelName",
        labelStats: "LabelStats",
      },
    },
    { additionalProperties: s.json() },
  );
