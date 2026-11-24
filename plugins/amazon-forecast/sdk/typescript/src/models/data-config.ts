import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { additionalDatasetSchema, type AdditionalDataset } from "./additional-dataset.js";
import { attributeConfigSchema, type AttributeConfig } from "./attribute-config.js";

export type DataConfig = {
  /** The ARN of the dataset group used to train the predictor. */
  datasetGroupArn: string;
  /** Aggregation and filling options for attributes in your dataset group. */
  attributeConfigs?: AttributeConfig[];
  /** Additional built-in datasets like Holidays and the Weather Index. */
  additionalDatasets?: AdditionalDataset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataConfigSchema: Schema<DataConfig> = s.object<DataConfig>(
  {
    datasetGroupArn: s.string(),
    attributeConfigs: s.optional(s.array(s.lazy(() => attributeConfigSchema))),
    additionalDatasets: s.optional(s.array(s.lazy(() => additionalDatasetSchema))),
    _keysMap: {
      datasetGroupArn: "DatasetGroupArn",
      attributeConfigs: "AttributeConfigs",
      additionalDatasets: "AdditionalDatasets",
    },
  },
  { additionalProperties: s.json() },
);
