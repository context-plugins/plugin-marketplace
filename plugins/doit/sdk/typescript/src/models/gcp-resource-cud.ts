import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reservedResourceSchema, type ReservedResource } from "./reserved-resource.js";

/**
 * GCP resource-based Committed Use Discount (vCPU / memory). Mirrors the stored provider document
 * verbatim (raw values, e.g. `state`/`status` "ACTIVE", `plan` "TWELVE_MONTH").
 */
export type GcpResourceCud = {
  /** `true` if the CUD is configured to renew automatically at the end of its term. */
  autoRenew?: boolean;
  /** GCP project number billed for this CUD's charges. */
  billingProjectNumber?: string;
  /** Resource-based CUD ID (provider-assigned). */
  commitmentNumericId: string;
  /** When the CUD was created. Null when unknown. */
  createdTime?: Date | null;
  /**
   * Latest date by which this CUD is eligible for a custom-term exchange. Null when not eligible.
   */
  customTermEligibleUntil?: Date | null;
  /** When the CUD term ends. Null when unknown. */
  endTime?: Date | null;
  /** Timestamp of the BigQuery CUD export row this item was read from. */
  exportDate?: Date;
  /** Machine family this CUD's reserved resources apply to. */
  hardwareScope?: string;
  /** GCP project ID hosting the reserved resources. */
  hostProjectId?: string;
  /** Raw provider inventory state. */
  inventoryState?: string;
  /** Fraction (0–1) of vCPU usage covered by this CUD in the last full calendar month. */
  lastMonthCpuCoverage?: number;
  /** Realized vCPU savings in the last full calendar month. */
  lastMonthCpuSavings?: number;
  /** Fraction (0–1) of this CUD's reserved vCPUs actually used in the last full calendar month. */
  lastMonthCpuUtilization?: number;
  /** Fraction (0–1) of memory usage covered by this CUD in the last full calendar month. */
  lastMonthMemoryCoverage?: number;
  /** Realized memory savings in the last full calendar month. */
  lastMonthMemorySavings?: number;
  /** Fraction (0–1) of this CUD's reserved memory actually used in the last full calendar month. */
  lastMonthMemoryUtilization?: number;
  /** Provider commitment display name. */
  name?: string;
  /** GCP organization ID that owns the host project. */
  organizationId?: string;
  /** Raw provider commitment plan. */
  plan?: string;
  /** GCP region the reserved resources are scoped to. */
  region?: string;
  /** Resources reserved by this CUD. */
  reservedResources?: ReservedResource[];
  /** When the CUD term started. Null when unknown. */
  startTime?: Date | null;
  /** Raw provider commitment state. */
  state: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcpResourceCudSchema: Schema<GcpResourceCud> = s.object<GcpResourceCud>(
  {
    autoRenew: s.optional(s.boolean()),
    billingProjectNumber: s.optional(s.string()),
    commitmentNumericId: s.string(),
    createdTime: s.optionalNullable(s.dateTime()),
    customTermEligibleUntil: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    exportDate: s.optional(s.dateTime()),
    hardwareScope: s.optional(s.string()),
    hostProjectId: s.optional(s.string()),
    inventoryState: s.optional(s.string()),
    lastMonthCpuCoverage: s.optional(s.float64()),
    lastMonthCpuSavings: s.optional(s.float64()),
    lastMonthCpuUtilization: s.optional(s.float64()),
    lastMonthMemoryCoverage: s.optional(s.float64()),
    lastMonthMemorySavings: s.optional(s.float64()),
    lastMonthMemoryUtilization: s.optional(s.float64()),
    name: s.optional(s.string()),
    organizationId: s.optional(s.string()),
    plan: s.optional(s.string()),
    region: s.optional(s.string()),
    reservedResources: s.optional(s.array(s.lazy(() => reservedResourceSchema))),
    startTime: s.optionalNullable(s.dateTime()),
    state: s.string(),
    _keysMap: {
      lastMonthCpuCoverage: "lastMonthCPUCoverage",
      lastMonthCpuSavings: "lastMonthCPUSavings",
      lastMonthCpuUtilization: "lastMonthCPUUtilization",
    },
  },
  { additionalProperties: s.json() },
);
