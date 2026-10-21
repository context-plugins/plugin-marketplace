import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  monitoringDebouncingIncidentPolicySchema,
  type MonitoringDebouncingIncidentPolicy,
} from "../monitoring-debouncing-incident-policy.js";

export type IncidentPolicy2 = MonitoringDebouncingIncidentPolicy;

export const incidentPolicy2Schema: Schema<IncidentPolicy2> = s.of<IncidentPolicy2>(
  s.union([s.lazy(() => monitoringDebouncingIncidentPolicySchema)]),
);
