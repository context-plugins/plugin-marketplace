import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetInputDataConfigSchema, type DatasetInputDataConfig } from "./dataset-input-data-config.js";
import { datasetTypeSchema, type DatasetType } from "./dataset-type.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateDatasetRequest = {
  /** The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data. */
  flywheelArn: string;
  /** Name of the dataset. */
  datasetName: string;
  /**
   * The dataset type. You can specify that the data in a dataset is for training the model or for
   * testing the model.
   */
  datasetType?: DatasetType;
  /** Description of the dataset. */
  description?: string;
  inputDataConfig: DatasetInputDataConfig;
  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon
   * Comprehend generates one.
   */
  clientRequestToken?: string;
  /** Tags for the dataset. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDatasetRequestSchema: Schema<CreateDatasetRequest> = s.object<CreateDatasetRequest>(
  {
    flywheelArn: s.string(),
    datasetName: s.string(),
    datasetType: s.optional(s.lazy(() => datasetTypeSchema)),
    description: s.optional(s.string()),
    inputDataConfig: datasetInputDataConfigSchema,
    clientRequestToken: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      flywheelArn: "FlywheelArn",
      datasetName: "DatasetName",
      datasetType: "DatasetType",
      description: "Description",
      inputDataConfig: "InputDataConfig",
      clientRequestToken: "ClientRequestToken",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
