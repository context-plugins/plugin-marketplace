import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The domain associated with the dataset group. */
export const Domain1 = {
  Retail: "RETAIL",
  Custom: "CUSTOM",
  InventoryPlanning: "INVENTORY_PLANNING",
  Ec2Capacity: "EC2_CAPACITY",
  WorkForce: "WORK_FORCE",
  WebTraffic: "WEB_TRAFFIC",
  Metrics: "METRICS",
} as const;
export type Domain1 = (typeof Domain1)[keyof typeof Domain1] | (string & {});

export const domain1Schema: EnumSchema<Domain1> = s.enumOf<Domain1>(Domain1);
