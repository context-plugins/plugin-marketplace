import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeDatasetRequest = {
  /** The ARN of the dataset. */
  datasetArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDatasetRequestSchema: Schema<DescribeDatasetRequest> = s.object<DescribeDatasetRequest>(
  {
    datasetArn: s.string(),
    _keysMap: {
      datasetArn: "DatasetArn",
    },
  },
  { additionalProperties: s.json() },
);
