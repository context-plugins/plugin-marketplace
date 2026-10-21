import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of monitoring metric creator. */
export const MonitoringMetricCreatorType2 = {
  PrivateKey: "private_key",
  User: "user",
} as const;
export type MonitoringMetricCreatorType2 =
  | (typeof MonitoringMetricCreatorType2)[keyof typeof MonitoringMetricCreatorType2]
  | (string & {});

export const monitoringMetricCreatorType2Schema: EnumSchema<MonitoringMetricCreatorType2> =
  s.enumOf<MonitoringMetricCreatorType2>(MonitoringMetricCreatorType2);
