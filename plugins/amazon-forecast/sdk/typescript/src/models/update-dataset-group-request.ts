import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateDatasetGroupRequest = {
  /** The ARN of the dataset group. */
  datasetGroupArn: string;
  /** An array of the Amazon Resource Names (ARNs) of the datasets to add to the dataset group. */
  datasetArns: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDatasetGroupRequestSchema: Schema<UpdateDatasetGroupRequest> =
  s.object<UpdateDatasetGroupRequest>(
    {
      datasetGroupArn: s.string(),
      datasetArns: s.array(s.string()),
      _keysMap: {
        datasetGroupArn: "DatasetGroupArn",
        datasetArns: "DatasetArns",
      },
    },
    { additionalProperties: s.json() },
  );
