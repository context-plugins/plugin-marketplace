import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetDescriptionSchema, type DatasetDescription } from "./dataset-description.js";

export type DescribeDatasetResponse = {
  datasetDescription?: DatasetDescription;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDatasetResponseSchema: Schema<DescribeDatasetResponse> =
  s.object<DescribeDatasetResponse>(
    {
      datasetDescription: s.optional(s.lazy(() => datasetDescriptionSchema)),
      _keysMap: {
        datasetDescription: "DatasetDescription",
      },
    },
    { additionalProperties: s.json() },
  );
