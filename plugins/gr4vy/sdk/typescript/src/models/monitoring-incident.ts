import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type42, type42Schema } from "./type42.js";
import { alertingPolicySchema, type AlertingPolicy } from "./unions/alerting-policy.js";
import { closedAtSchema, type ClosedAt } from "./unions/closed-at.js";
import { incidentPolicySchema, type IncidentPolicy } from "./unions/incident-policy.js";
import { metricIdSchema, type MetricId } from "./unions/metric-id.js";
import { notesSchema, type Notes } from "./unions/notes.js";

export type MonitoringIncident = {
  /** Always `monitoring.incident`. @default Type42.MonitoringIncident */
  type?: Type42;
  /** The ID of the monitoring incident. */
  id: string;
  /**
   * The ID of the monitoring metric that the incident relates to. This value is null if the
   * monitoring metric has been deleted.
   */
  metricId: MetricId;
  /** The ID of the merchant account the monitoring incident belongs to. */
  merchantAccountId: string;
  /** The monitoring metric display name captured at the time of incident creation. */
  displayName: string;
  /** The monitoring metric specification captured at the time of incident creation. */
  spec: Record<string, unknown>;
  /** The monitoring metric alerting policy captured at the time of incident creation. */
  alertingPolicy: AlertingPolicy;
  /** The monitoring metric incident policy captured at the time of incident creation. */
  incidentPolicy: IncidentPolicy;
  /** Notes for the monitoring incident. */
  notes: Notes;
  /** The date and time when the monitoring incident was first created. */
  createdAt: Date;
  /** The date and time when the monitoring incident was last updated. */
  updatedAt: Date;
  /** The date and time when the monitoring incident was closed. */
  closedAt: ClosedAt;
};

export const monitoringIncidentSchema: Schema<MonitoringIncident> = s.object<MonitoringIncident>({
  type: s.defaulted(type42Schema, Type42.MonitoringIncident),
  id: s.string(),
  metricId: metricIdSchema,
  merchantAccountId: s.string(),
  displayName: s.string(),
  spec: s.record(s.string(), s.unknown()),
  alertingPolicy: alertingPolicySchema,
  incidentPolicy: incidentPolicySchema,
  notes: notesSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  closedAt: closedAtSchema,
  _keysMap: {
    metricId: "metric_id",
    merchantAccountId: "merchant_account_id",
    displayName: "display_name",
    alertingPolicy: "alerting_policy",
    incidentPolicy: "incident_policy",
    createdAt: "created_at",
    updatedAt: "updated_at",
    closedAt: "closed_at",
  },
});
