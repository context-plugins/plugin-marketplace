import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  allocationDoiTAnomaliesApiSchema,
  type AllocationDoiTAnomaliesApi,
} from "./allocation-doi-tanomalies-api.js";
import { anomalyCustomerFeedbackSchema, type AnomalyCustomerFeedback } from "./anomaly-customer-feedback.js";
import { anomalyResourceSchema, type AnomalyResource } from "./anomaly-resource.js";
import { anomalySkuSchema, type AnomalySku } from "./anomaly-sku.js";
import { deactivationReasonSchema, type DeactivationReason } from "./deactivation-reason.js";
import { monitorLevelSchema, type MonitorLevel } from "./monitor-level.js";
import { notificationEventSchema, type NotificationEvent } from "./notification-event.js";
import { statusSchema, type Status } from "./status.js";

export type AnomaliesV1Response = {
  /**
   * Deprecated: use 'allocations' instead. Name of the anomaly's primary allocation. Can be empty
   * even when `allocations` is not, so it may differ from the first entry of `allocations`.
   *
   * @deprecated
   */
  attribution: string;
  /**
   * Every allocation the anomaly belongs to, primary allocation first. Allocations that no longer
   * exist are left out. Anomalies with a single allocation return a one-item list. Some older
   * anomalies have no allocation recorded and return an empty list.
   */
  allocations: AllocationDoiTAnomaliesApi[];
  /** Billing account ID */
  billingAccount: string;
  /** The difference between the actual cost and the maximum cost in the normal range. */
  costOfAnomaly: number;
  /** Observed (actual) cost of the anomaly. */
  actualCost?: number | null;
  /** Maximum cost within the expected normal range. */
  expectedMaxCost?: number | null;
  /** Cloud Provider name */
  platform: string;
  /**
   * The anomaly's project or account identifier as reported by the provider. For providers whose
   * billing grain is not a cloud project — a user or an organization, for example — this is that
   * identifier, so treat it as an opaque id and use `entityLabel`/`entityName` for presentation.
   */
  scope: string;
  /**
   * Connector-declared name for what `scope` identifies, for example "Project", "Account" or
   * "User". Absent when the provider publishes no display profile.
   */
  entityLabel?: string;
  /**
   * Human-readable value for `scope` when the provider publishes one — for example a user's email
   * address where `scope` is an opaque user id. Absent when unavailable.
   */
  entityName?: string;
  /**
   * Connector-declared display name for the provider, for example "Anthropic (Analytics API)".
   * Absent when the provider publishes no display profile.
   */
  providerDisplayName?: string;
  /** Service name */
  serviceName: string;
  /** Severity level: `information`, `warning`, or `critical`. */
  severityLevel: string;
  /** Usage start time of the anomaly */
  startTime: number;
  /** End of the anomaly */
  endTime?: number | null;
  /**
   * Why the anomaly stopped being active. `reverted` means the cost returned inside the expected
   * normal range; `expired` means the anomaly was deactivated without the cost returning inside
   * that range; `unknown` means the reason could not be determined. Null while the anomaly is still
   * active.
   */
  deactivationReason?: DeactivationReason | null;
  /** Timeframe: Daily or Hourly */
  timeFrame: string;
  /** Array of SKU entries contributing to an anomaly. */
  top3SkUs: AnomalySku[];
  /**
   * Whether the anomaly was detected on a single SKU (`sku`) or at the level of a whole service
   * (`service`).
   */
  monitorLevel: MonitorLevel;
  /** Array of resources contributing to an anomaly. */
  resourceData?: AnomalyResource[];
  status?: Status | null;
  /** Has the anomaly been acknowledged */
  acknowledged?: boolean;
  /** When the anomaly was first acknowledged */
  acknowledgedAt?: Date | null;
  /** Email of the user who first acknowledged the anomaly */
  acknowledgedBy?: string | null;
  /**
   * Current review status of the anomaly, as set in the console or through `patchAnomaly`. Always
   * present; an anomaly nobody has reviewed yet reports `NEEDS_REVIEW`.
   */
  customerFeedback: AnomalyCustomerFeedback;
  /** Chronologically ordered notification dispatch events. */
  notifications: NotificationEvent[];
  /**
   * The first notification sent on each channel (email, Slack, Microsoft Teams) for this anomaly,
   * without reminders, ordered by timestamp. Always present; empty when the anomaly has not been
   * notified.
   */
  initialNotifications: NotificationEvent[];
  /**
   * IDs of the other related anomalies in the same service around same time. Always the complete
   * group: the filters, time window, and pagination of the request that returned this anomaly do
   * not narrow it, so an ID here may not appear among the anomalies of that same response.
   */
  linkedAnomalies?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomaliesV1ResponseSchema: Schema<AnomaliesV1Response> = s.object<AnomaliesV1Response>(
  {
    attribution: s.string(),
    allocations: s.array(s.lazy(() => allocationDoiTAnomaliesApiSchema)),
    billingAccount: s.string(),
    costOfAnomaly: s.float64(),
    actualCost: s.optionalNullable(s.float64()),
    expectedMaxCost: s.optionalNullable(s.float64()),
    platform: s.string(),
    scope: s.string(),
    entityLabel: s.optional(s.string()),
    entityName: s.optional(s.string()),
    providerDisplayName: s.optional(s.string()),
    serviceName: s.string(),
    severityLevel: s.string(),
    startTime: s.int(),
    endTime: s.optionalNullable(s.int()),
    deactivationReason: s.optionalNullable(s.lazy(() => deactivationReasonSchema)),
    timeFrame: s.string(),
    top3SkUs: s.array(s.lazy(() => anomalySkuSchema)),
    monitorLevel: monitorLevelSchema,
    resourceData: s.optional(s.array(s.lazy(() => anomalyResourceSchema))),
    status: s.optionalNullable(s.lazy(() => statusSchema)),
    acknowledged: s.optional(s.boolean()),
    acknowledgedAt: s.optionalNullable(s.dateTime()),
    acknowledgedBy: s.optionalNullable(s.string()),
    customerFeedback: anomalyCustomerFeedbackSchema,
    notifications: s.array(s.lazy(() => notificationEventSchema)),
    initialNotifications: s.array(s.lazy(() => notificationEventSchema)),
    linkedAnomalies: s.optional(s.array(s.string())),
    _keysMap: {
      top3SkUs: "top3SKUs",
    },
  },
  { additionalProperties: s.json() },
);
