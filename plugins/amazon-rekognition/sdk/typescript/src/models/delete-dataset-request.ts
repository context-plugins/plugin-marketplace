import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteDatasetRequest = {
  /** The ARN of the Amazon Rekognition Custom Labels dataset that you want to delete. */
  datasetArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteDatasetRequestSchema: Schema<DeleteDatasetRequest> = s.object<DeleteDatasetRequest>(
  {
    datasetArn: s.string(),
    _keysMap: {
      datasetArn: "DatasetArn",
    },
  },
  { additionalProperties: s.json() },
);
