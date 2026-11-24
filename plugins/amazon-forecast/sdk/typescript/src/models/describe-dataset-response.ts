import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetType1Schema, type DatasetType1 } from "./dataset-type1.js";
import {
  domain1AmazonForecastServiceDatasetsApiSchema,
  type Domain1AmazonForecastServiceDatasetsApi,
} from "./domain1-amazon-forecast-service-datasets-api.js";
import { encryptionConfigSchema, type EncryptionConfig } from "./encryption-config.js";
import { schemaModelSchema, type SchemaModel } from "./schema-model.js";

export type DescribeDatasetResponse = {
  /** The Amazon Resource Name (ARN) of the dataset. */
  datasetArn?: string;
  /** The name of the dataset. */
  datasetName?: string;
  /** The domain associated with the dataset. */
  domain?: Domain1AmazonForecastServiceDatasetsApi;
  /** The dataset type. */
  datasetType?: DatasetType1;
  /**
   * The frequency of data collection. Valid intervals are Y (Year), M (Month), W (Week), D (Day), H
   * (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min
   * (1 minute). For example, "M" indicates every month and "30min" indicates every 30 minutes.
   */
  dataFrequency?: string;
  schema?: SchemaModel;
  encryptionConfig?: EncryptionConfig;
  /**
   * The status of the dataset. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED UPDATE_PENDING,
   * UPDATE_IN_PROGRESS, UPDATE_FAILED The UPDATE states apply while data is imported to the dataset
   * from a call to the CreateDatasetImportJob operation and reflect the status of the dataset
   * import job. For example, when the import job status is CREATE_IN_PROGRESS, the status of the
   * dataset is UPDATE_IN_PROGRESS. The Status of the dataset must be ACTIVE before you can import
   * training data.
   */
  status?: string;
  /** When the dataset was created. */
  creationTime?: Date;
  /**
   * When you create a dataset, LastModificationTime is the same as CreationTime. While data is
   * being imported to the dataset, LastModificationTime is the current time of the DescribeDataset
   * call. After a CreateDatasetImportJob operation has finished, LastModificationTime is when the
   * import job completed or failed.
   */
  lastModificationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDatasetResponseSchema: Schema<DescribeDatasetResponse> =
  s.object<DescribeDatasetResponse>(
    {
      datasetArn: s.optional(s.string()),
      datasetName: s.optional(s.string()),
      domain: s.optional(s.lazy(() => domain1AmazonForecastServiceDatasetsApiSchema)),
      datasetType: s.optional(s.lazy(() => datasetType1Schema)),
      dataFrequency: s.optional(s.string()),
      schema: s.optional(s.lazy(() => schemaModelSchema)),
      encryptionConfig: s.optional(s.lazy(() => encryptionConfigSchema)),
      status: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      _keysMap: {
        datasetArn: "DatasetArn",
        datasetName: "DatasetName",
        domain: "Domain",
        datasetType: "DatasetType",
        dataFrequency: "DataFrequency",
        schema: "Schema",
        encryptionConfig: "EncryptionConfig",
        status: "Status",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
      },
    },
    { additionalProperties: s.json() },
  );
