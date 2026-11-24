import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudProviderDoiTServiceQuotasApiSchema,
  type CloudProviderDoiTServiceQuotasApi,
} from "./cloud-provider-doi-tservice-quotas-api.js";
import { serviceQuotaResourceSchema, type ServiceQuotaResource } from "./service-quota-resource.js";
import {
  statusDoiTServiceQuotasApiSchema,
  type StatusDoiTServiceQuotasApi,
} from "./status-doi-tservice-quotas-api.js";

export type ServiceQuota = {
  /** Cloud provider that owns the quota. */
  cloudProvider: CloudProviderDoiTServiceQuotasApi;
  resource: ServiceQuotaResource;
  /** Cloud service associated with the quota. */
  service: string;
  /** Provider quota or metric name. */
  quota: string;
  /** Cloud region associated with the quota. Omitted for global quotas. */
  region?: string;
  /** Current quota limit. */
  limit: number;
  /** Current measured quota usage. */
  usage: number;
  /** Usage divided by limit, expressed as a percentage. */
  utilizationPercent: number;
  /**
   * Normalized utilization status. Warning begins at 80 percent; exceeded begins at 100 percent.
   */
  status: StatusDoiTServiceQuotasApi;
  /** Time when DoiT last updated the provider snapshot. */
  observedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceQuotaSchema: Schema<ServiceQuota> = s.object<ServiceQuota>(
  {
    cloudProvider: cloudProviderDoiTServiceQuotasApiSchema,
    resource: serviceQuotaResourceSchema,
    service: s.string(),
    quota: s.string(),
    region: s.optional(s.string()),
    limit: s.float64(),
    usage: s.float64(),
    utilizationPercent: s.float64(),
    status: statusDoiTServiceQuotasApiSchema,
    observedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
