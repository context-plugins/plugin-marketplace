import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The domain associated with the dataset group. When you add a dataset to a dataset group, this
 * value and the value specified for the Domain parameter of the CreateDataset operation must match.
 * The Domain and DatasetType that you choose determine the fields that must be present in training
 * data that you import to a dataset. For example, if you choose the RETAIL domain and
 * TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires that item_id, timestamp, and
 * demand fields are present in your data. For more information, see Dataset groups.
 */
export const Domain = {
  Retail: "RETAIL",
  Custom: "CUSTOM",
  InventoryPlanning: "INVENTORY_PLANNING",
  Ec2Capacity: "EC2_CAPACITY",
  WorkForce: "WORK_FORCE",
  WebTraffic: "WEB_TRAFFIC",
  Metrics: "METRICS",
} as const;
export type Domain = (typeof Domain)[keyof typeof Domain] | (string & {});

export const domainSchema: EnumSchema<Domain> = s.enumOf<Domain>(Domain);
