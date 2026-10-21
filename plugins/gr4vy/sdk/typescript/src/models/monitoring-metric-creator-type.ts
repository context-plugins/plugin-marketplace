import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MonitoringMetricCreatorType = {
  PrivateKey: "private_key",
  User: "user",
} as const;
export type MonitoringMetricCreatorType =
  | (typeof MonitoringMetricCreatorType)[keyof typeof MonitoringMetricCreatorType]
  | (string & {});

export const monitoringMetricCreatorTypeSchema: EnumSchema<MonitoringMetricCreatorType> =
  s.enumOf<MonitoringMetricCreatorType>(MonitoringMetricCreatorType);
