import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteDatasetImportJobRequest = {
  /** The Amazon Resource Name (ARN) of the dataset import job to delete. */
  datasetImportJobArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteDatasetImportJobRequestSchema: Schema<DeleteDatasetImportJobRequest> =
  s.object<DeleteDatasetImportJobRequest>(
    {
      datasetImportJobArn: s.string(),
      _keysMap: {
        datasetImportJobArn: "DatasetImportJobArn",
      },
    },
    { additionalProperties: s.json() },
  );
