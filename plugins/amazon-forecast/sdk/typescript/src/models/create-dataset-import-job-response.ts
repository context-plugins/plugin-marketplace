import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateDatasetImportJobResponse = {
  /** The Amazon Resource Name (ARN) of the dataset import job. */
  datasetImportJobArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDatasetImportJobResponseSchema: Schema<CreateDatasetImportJobResponse> =
  s.object<CreateDatasetImportJobResponse>(
    {
      datasetImportJobArn: s.optional(s.string()),
      _keysMap: {
        datasetImportJobArn: "DatasetImportJobArn",
      },
    },
    { additionalProperties: s.json() },
  );
