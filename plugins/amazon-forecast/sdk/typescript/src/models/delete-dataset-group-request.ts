import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteDatasetGroupRequest = {
  /** The Amazon Resource Name (ARN) of the dataset group to delete. */
  datasetGroupArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteDatasetGroupRequestSchema: Schema<DeleteDatasetGroupRequest> =
  s.object<DeleteDatasetGroupRequest>(
    {
      datasetGroupArn: s.string(),
      _keysMap: {
        datasetGroupArn: "DatasetGroupArn",
      },
    },
    { additionalProperties: s.json() },
  );
