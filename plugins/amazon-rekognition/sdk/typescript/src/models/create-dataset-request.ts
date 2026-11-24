import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetSourceSchema, type DatasetSource } from "./dataset-source.js";
import { datasetTypeSchema, type DatasetType } from "./dataset-type.js";

export type CreateDatasetRequest = {
  datasetSource?: DatasetSource;
  /**
   * The type of the dataset. Specify TRAIN to create a training dataset. Specify TEST to create a
   * test dataset.
   */
  datasetType: DatasetType;
  /**
   * The ARN of the Amazon Rekognition Custom Labels project to which you want to asssign the
   * dataset.
   */
  projectArn: string;
  /** A set of tags (key-value pairs) that you want to attach to the dataset. */
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDatasetRequestSchema: Schema<CreateDatasetRequest> = s.object<CreateDatasetRequest>(
  {
    datasetSource: s.optional(s.lazy(() => datasetSourceSchema)),
    datasetType: datasetTypeSchema,
    projectArn: s.string(),
    tags: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      datasetSource: "DatasetSource",
      datasetType: "DatasetType",
      projectArn: "ProjectArn",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
