import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conf2Schema, type Conf2 } from "./conf2.js";

/** HealthCheck collector configuration */
export type CollectorHealthCheck = {
  /** Collector type @default "health_check" */
  type?: "health_check";
  /** Collector configuration */
  conf: Conf2;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorHealthCheckSchema: Schema<CollectorHealthCheck> = s.object<CollectorHealthCheck>({
  type: s.defaulted(s.literal("health_check"), "health_check"),
  conf: conf2Schema,
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});
