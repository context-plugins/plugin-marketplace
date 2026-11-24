import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The domain associated with the dataset. */
export const Domain1AmazonForecastServiceDatasetsApi = {
  Retail: "RETAIL",
  Custom: "CUSTOM",
  InventoryPlanning: "INVENTORY_PLANNING",
  Ec2Capacity: "EC2_CAPACITY",
  WorkForce: "WORK_FORCE",
  WebTraffic: "WEB_TRAFFIC",
  Metrics: "METRICS",
} as const;
export type Domain1AmazonForecastServiceDatasetsApi =
  | (typeof Domain1AmazonForecastServiceDatasetsApi)[keyof typeof Domain1AmazonForecastServiceDatasetsApi]
  | (string & {});

export const domain1AmazonForecastServiceDatasetsApiSchema: EnumSchema<Domain1AmazonForecastServiceDatasetsApi> =
  s.enumOf<Domain1AmazonForecastServiceDatasetsApi>(Domain1AmazonForecastServiceDatasetsApi);
