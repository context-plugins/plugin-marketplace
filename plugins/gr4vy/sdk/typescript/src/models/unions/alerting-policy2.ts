import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  monitoringThresholdAlertingPolicySchema,
  type MonitoringThresholdAlertingPolicy,
} from "../monitoring-threshold-alerting-policy.js";

export type AlertingPolicy2 = MonitoringThresholdAlertingPolicy;

export const alertingPolicy2Schema: Schema<AlertingPolicy2> = s.of<AlertingPolicy2>(
  s.union([s.lazy(() => monitoringThresholdAlertingPolicySchema)]),
);
