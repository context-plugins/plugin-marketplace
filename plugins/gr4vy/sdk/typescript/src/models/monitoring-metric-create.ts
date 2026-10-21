import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { monitoringAuthRateSpecSchema, type MonitoringAuthRateSpec } from "./monitoring-auth-rate-spec.js";
import { alertingPolicy2Schema, type AlertingPolicy2 } from "./unions/alerting-policy2.js";
import { incidentPolicy2Schema, type IncidentPolicy2 } from "./unions/incident-policy2.js";

export type MonitoringMetricCreate = {
  /** The display name for the monitoring metric. */
  displayName: string;
  /** The monitoring metric specification. */
  spec: MonitoringAuthRateSpec;
  alertingPolicy: AlertingPolicy2;
  incidentPolicy: IncidentPolicy2;
};

export const monitoringMetricCreateSchema: Schema<MonitoringMetricCreate> = s.object<MonitoringMetricCreate>({
  displayName: s.string(),
  spec: monitoringAuthRateSpecSchema,
  alertingPolicy: alertingPolicy2Schema,
  incidentPolicy: incidentPolicy2Schema,
  _keysMap: {
    displayName: "display_name",
    alertingPolicy: "alerting_policy",
    incidentPolicy: "incident_policy",
  },
});
