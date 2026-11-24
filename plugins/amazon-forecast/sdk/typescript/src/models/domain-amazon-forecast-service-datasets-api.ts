import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The domain associated with the dataset. When you add a dataset to a dataset group, this value and
 * the value specified for the Domain parameter of the CreateDatasetGroup operation must match. The
 * Domain and DatasetType that you choose determine the fields that must be present in the training
 * data that you import to the dataset. For example, if you choose the RETAIL domain and
 * TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires item_id, timestamp, and demand
 * fields to be present in your data. For more information, see Importing datasets.
 */
export const DomainAmazonForecastServiceDatasetsApi = {
  Retail: "RETAIL",
  Custom: "CUSTOM",
  InventoryPlanning: "INVENTORY_PLANNING",
  Ec2Capacity: "EC2_CAPACITY",
  WorkForce: "WORK_FORCE",
  WebTraffic: "WEB_TRAFFIC",
  Metrics: "METRICS",
} as const;
export type DomainAmazonForecastServiceDatasetsApi =
  | (typeof DomainAmazonForecastServiceDatasetsApi)[keyof typeof DomainAmazonForecastServiceDatasetsApi]
  | (string & {});

export const domainAmazonForecastServiceDatasetsApiSchema: EnumSchema<DomainAmazonForecastServiceDatasetsApi> =
  s.enumOf<DomainAmazonForecastServiceDatasetsApi>(DomainAmazonForecastServiceDatasetsApi);
