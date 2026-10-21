import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringThresholdAlertingPolicyParamsSchema,
  type MonitoringThresholdAlertingPolicyParams,
} from "./monitoring-threshold-alerting-policy-params.js";
import { Strategy1, strategy1Schema } from "./strategy1.js";

export type MonitoringThresholdAlertingPolicy = {
  /** @default Strategy1.Threshold */
  strategy?: Strategy1;
  params: MonitoringThresholdAlertingPolicyParams;
};

export const monitoringThresholdAlertingPolicySchema: Schema<MonitoringThresholdAlertingPolicy> =
  s.object<MonitoringThresholdAlertingPolicy>({
    strategy: s.defaulted(strategy1Schema, Strategy1.Threshold),
    params: monitoringThresholdAlertingPolicyParamsSchema,
  });
