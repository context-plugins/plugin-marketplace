import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetType1Schema, type DatasetType1 } from "./dataset-type1.js";
import {
  domain1AmazonForecastServiceDatasetsApiSchema,
  type Domain1AmazonForecastServiceDatasetsApi,
} from "./domain1-amazon-forecast-service-datasets-api.js";

export type DatasetSummary = {
  /** The Amazon Resource Name (ARN) of the dataset. */
  datasetArn?: string;
  /** The name of the dataset. */
  datasetName?: string;
  /** The dataset type. */
  datasetType?: DatasetType1;
  /** The domain associated with the dataset. */
  domain?: Domain1AmazonForecastServiceDatasetsApi;
  /** When the dataset was created. */
  creationTime?: Date;
  /**
   * When you create a dataset, LastModificationTime is the same as CreationTime. While data is
   * being imported to the dataset, LastModificationTime is the current time of the ListDatasets
   * call. After a CreateDatasetImportJob operation has finished, LastModificationTime is when the
   * import job completed or failed.
   */
  lastModificationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetSummarySchema: Schema<DatasetSummary> = s.object<DatasetSummary>(
  {
    datasetArn: s.optional(s.string()),
    datasetName: s.optional(s.string()),
    datasetType: s.optional(s.lazy(() => datasetType1Schema)),
    domain: s.optional(s.lazy(() => domain1AmazonForecastServiceDatasetsApiSchema)),
    creationTime: s.optional(s.dateTime()),
    lastModificationTime: s.optional(s.dateTime()),
    _keysMap: {
      datasetArn: "DatasetArn",
      datasetName: "DatasetName",
      datasetType: "DatasetType",
      domain: "Domain",
      creationTime: "CreationTime",
      lastModificationTime: "LastModificationTime",
    },
  },
  { additionalProperties: s.json() },
);
