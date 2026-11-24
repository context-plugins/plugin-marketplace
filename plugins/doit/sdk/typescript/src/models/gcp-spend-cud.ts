import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * GCP spend-based Committed Use Discount. Mirrors the stored provider document verbatim (raw
 * values, e.g. `state` "Active", `term` "P1Y", `commitmentAmount` as a plain double).
 */
export type GcpSpendCud = {
  /** Hourly commitment amount. */
  commitmentAmount?: number;
  /** Unit for `commitmentAmount`. */
  commitmentUnit?: string;
  /** Provider-assigned ID of the pricing model this CUD's discount is applied through. */
  consumptionModelId?: string;
  /** CUD ID (provider-assigned). */
  cudId: string;
  /** Provider-assigned ID of the product family (`cudProductName`) this CUD applies to. */
  cudProductId?: string;
  /** Product family name (e.g. `Compute Flexible`, `Cloud Run`, `BigQuery`). */
  cudProductName: string;
  /** Raw provider CUD type label. */
  cudProductType?: string;
  /** When the CUD term ends. Null when unknown. */
  endTime?: Date | null;
  /** Provider resource path this CUD's discount is scoped to (typically the billing account). */
  entitlementScope?: string;
  /** Timestamp of the BigQuery CUD export row this item was read from. */
  exportDate?: Date;
  /** Realized savings in the last full calendar month. */
  lastMonthSavings?: number;
  /** Utilization in the last full calendar month, as a fraction from 0 to 1. */
  lastMonthUtilization?: number;
  /** Provider commitment display name. */
  name?: string;
  /**
   * Region in raw provider form (`us-central1`), or `global` for cross-region spend CUDs. Not the
   * `lower_snake_case` wire form used by the `region` query parameter.
   */
  region?: string;
  /** When the CUD term started. Null when unknown. */
  startTime?: Date | null;
  /** Raw provider commitment state. */
  state: string;
  /**
   * Normalized coverage sub-type token (`UPPER_SNAKE`) identifying the product family within the
   * product line.
   */
  subType?: string;
  /** Raw provider commitment term (ISO-8601 duration). */
  term?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcpSpendCudSchema: Schema<GcpSpendCud> = s.object<GcpSpendCud>(
  {
    commitmentAmount: s.optional(s.float64()),
    commitmentUnit: s.optional(s.string()),
    consumptionModelId: s.optional(s.string()),
    cudId: s.string(),
    cudProductId: s.optional(s.string()),
    cudProductName: s.string(),
    cudProductType: s.optional(s.string()),
    endTime: s.optionalNullable(s.dateTime()),
    entitlementScope: s.optional(s.string()),
    exportDate: s.optional(s.dateTime()),
    lastMonthSavings: s.optional(s.float64()),
    lastMonthUtilization: s.optional(s.float64()),
    name: s.optional(s.string()),
    region: s.optional(s.string()),
    startTime: s.optionalNullable(s.dateTime()),
    state: s.string(),
    subType: s.optional(s.string()),
    term: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
