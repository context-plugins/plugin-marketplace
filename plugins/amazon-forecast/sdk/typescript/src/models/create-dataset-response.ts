import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateDatasetResponse = {
  /** The Amazon Resource Name (ARN) of the dataset. */
  datasetArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDatasetResponseSchema: Schema<CreateDatasetResponse> = s.object<CreateDatasetResponse>(
  {
    datasetArn: s.optional(s.string()),
    _keysMap: {
      datasetArn: "DatasetArn",
    },
  },
  { additionalProperties: s.json() },
);
