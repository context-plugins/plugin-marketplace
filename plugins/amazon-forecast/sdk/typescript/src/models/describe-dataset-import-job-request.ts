import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeDatasetImportJobRequest = {
  /** The Amazon Resource Name (ARN) of the dataset import job. */
  datasetImportJobArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDatasetImportJobRequestSchema: Schema<DescribeDatasetImportJobRequest> =
  s.object<DescribeDatasetImportJobRequest>(
    {
      datasetImportJobArn: s.string(),
      _keysMap: {
        datasetImportJobArn: "DatasetImportJobArn",
      },
    },
    { additionalProperties: s.json() },
  );
