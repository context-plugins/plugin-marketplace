import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetPropertiesSchema, type DatasetProperties } from "./dataset-properties.js";

export type DescribeDatasetResponse = {
  datasetProperties?: DatasetProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDatasetResponseSchema: Schema<DescribeDatasetResponse> =
  s.object<DescribeDatasetResponse>(
    {
      datasetProperties: s.optional(s.lazy(() => datasetPropertiesSchema)),
      _keysMap: {
        datasetProperties: "DatasetProperties",
      },
    },
    { additionalProperties: s.json() },
  );
