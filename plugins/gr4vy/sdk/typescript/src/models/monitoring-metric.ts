import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringMetricCreatorType2Schema,
  type MonitoringMetricCreatorType2,
} from "./monitoring-metric-creator-type2.js";
import { Type43, type43Schema } from "./type43.js";
import {
  alertingPolicyUpdatedAtSchema,
  type AlertingPolicyUpdatedAt,
} from "./unions/alerting-policy-updated-at.js";
import { alertingPolicy1Schema, type AlertingPolicy1 } from "./unions/alerting-policy1.js";
import {
  incidentPolicyUpdatedAtSchema,
  type IncidentPolicyUpdatedAt,
} from "./unions/incident-policy-updated-at.js";
import { incidentPolicy1Schema, type IncidentPolicy1 } from "./unions/incident-policy1.js";
import { samplesViewSchema, type SamplesView } from "./unions/samples-view.js";

export type MonitoringMetric = {
  /** Always `monitoring.metric`. @default Type43.MonitoringMetric */
  type?: Type43;
  /** The ID of the monitoring metric. */
  id: string;
  /** The ID of the merchant account the monitoring metric belongs to. */
  merchantAccountId: string;
  /** The display name of the monitoring metric. */
  displayName: string;
  /** The monitoring metric specification. */
  spec: Record<string, unknown>;
  /** The alerting policy of the monitoring metric. */
  alertingPolicy: AlertingPolicy1;
  /** The date and time when the alerting policy was last updated. */
  alertingPolicyUpdatedAt: AlertingPolicyUpdatedAt;
  /** The incident policy of the monitoring metric. */
  incidentPolicy: IncidentPolicy1;
  /** The date and time when the incident policy was last updated. */
  incidentPolicyUpdatedAt: IncidentPolicyUpdatedAt;
  /** The date and time when the monitoring metric was first created. */
  createdAt: Date;
  /** The ID of the user who created the monitoring metric. */
  creatorId: string;
  /** The type of monitoring metric creator. */
  creatorType: MonitoringMetricCreatorType2;
  /** The display name of the monitoring metric creator. */
  creatorDisplayName: string;
  /** The date and time when the monitoring metric was last updated. */
  updatedAt: Date;
  /** The requested subset of monitoring metric samples. */
  samplesView: SamplesView;
};

export const monitoringMetricSchema: Schema<MonitoringMetric> = s.object<MonitoringMetric>({
  type: s.defaulted(type43Schema, Type43.MonitoringMetric),
  id: s.string(),
  merchantAccountId: s.string(),
  displayName: s.string(),
  spec: s.record(s.string(), s.unknown()),
  alertingPolicy: alertingPolicy1Schema,
  alertingPolicyUpdatedAt: alertingPolicyUpdatedAtSchema,
  incidentPolicy: incidentPolicy1Schema,
  incidentPolicyUpdatedAt: incidentPolicyUpdatedAtSchema,
  createdAt: s.dateTime(),
  creatorId: s.string(),
  creatorType: monitoringMetricCreatorType2Schema,
  creatorDisplayName: s.string(),
  updatedAt: s.dateTime(),
  samplesView: samplesViewSchema,
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    displayName: "display_name",
    alertingPolicy: "alerting_policy",
    alertingPolicyUpdatedAt: "alerting_policy_updated_at",
    incidentPolicy: "incident_policy",
    incidentPolicyUpdatedAt: "incident_policy_updated_at",
    createdAt: "created_at",
    creatorId: "creator_id",
    creatorType: "creator_type",
    creatorDisplayName: "creator_display_name",
    updatedAt: "updated_at",
    samplesView: "samples_view",
  },
});
