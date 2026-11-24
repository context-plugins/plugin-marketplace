import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the anomaly was detected on a single SKU (`sku`) or at the level of a whole service
 * (`service`).
 */
export const MonitorLevel = {
  Service: "service",
  Sku: "sku",
} as const;
export type MonitorLevel = (typeof MonitorLevel)[keyof typeof MonitorLevel] | (string & {});

export const monitorLevelSchema: EnumSchema<MonitorLevel> = s.enumOf<MonitorLevel>(MonitorLevel);
