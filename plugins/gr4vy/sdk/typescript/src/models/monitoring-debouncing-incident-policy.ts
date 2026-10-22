import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringDebouncingIncidentPolicyParamsSchema,
  type MonitoringDebouncingIncidentPolicyParams,
} from "./monitoring-debouncing-incident-policy-params.js";
import { Strategy, strategySchema } from "./strategy.js";

export type MonitoringDebouncingIncidentPolicy = {
  /** @default Strategy.Debouncing */
  strategy?: Strategy;
  params: MonitoringDebouncingIncidentPolicyParams;
};

export const monitoringDebouncingIncidentPolicySchema: Schema<MonitoringDebouncingIncidentPolicy> =
  s.object<MonitoringDebouncingIncidentPolicy>({
    strategy: s.defaulted(strategySchema, Strategy.Debouncing),
    params: monitoringDebouncingIncidentPolicyParamsSchema,
  });
