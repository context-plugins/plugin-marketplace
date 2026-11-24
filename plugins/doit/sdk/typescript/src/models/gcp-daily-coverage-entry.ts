import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";

/**
 * One day of CUD coverage breakdown. Money fields are wrapped objects (`{amount, currency}`). Which
 * cost properties are present depends on the product line of the enclosing entry — `compute` rows
 * carry every property except `cloudSql`; `cloud_sql` rows carry only `cloudSql` and `onDemand`. A
 * property that belongs to the product line is present even when the amount is `0.00`.
 */
export type GcpDailyCoverageEntry = {
  /** Calendar day (UTC) for this coverage row in format YYYY-MM-DD. */
  date: string;
  /** Spend covered by Compute Flexible CUDs for the day. */
  computeFlexible?: Money;
  /** Spend covered by Cloud Run CUDs for the day. */
  cloudRun?: Money;
  /** Spend covered by BigQuery CUDs for the day. */
  bigQuery?: Money;
  /** Spend covered by Bigtable CUDs for the day. */
  bigtable?: Money;
  /** Spend covered by Cloud SQL CUDs for the day. */
  cloudSql?: Money;
  /** Spend covered by Cloud Firestore CUDs for the day. */
  cloudFirestore?: Money;
  /** Spend covered by Cloud Spanner CUDs for the day. */
  cloudSpanner?: Money;
  /** Spend covered by Memorystore for Redis CUDs for the day. */
  memorystoreForRedis?: Money;
  /** Spend covered by AlloyDB CUDs for the day. */
  alloyDb?: Money;
  /** Spend covered by Google Cloud Backup and DR for Oracle CUDs for the day. */
  backupForOracle?: Money;
  /** Spend covered by Kafka CUDs for the day. */
  kafka?: Money;
  /** Spend covered by resource-based (vCPU / memory) CUDs for the day. */
  resourceBased?: Money;
  /** On-demand spend not covered by any CUD for the day. */
  onDemand?: Money;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpDailyCoverageEntryProperties: s.Shape<GcpDailyCoverageEntry> = {
  date: s.dateOnly(),
  computeFlexible: s.optional(s.lazy(() => moneyInternalSchema)),
  cloudRun: s.optional(s.lazy(() => moneyInternalSchema)),
  bigQuery: s.optional(s.lazy(() => moneyInternalSchema)),
  bigtable: s.optional(s.lazy(() => moneyInternalSchema)),
  cloudSql: s.optional(s.lazy(() => moneyInternalSchema)),
  cloudFirestore: s.optional(s.lazy(() => moneyInternalSchema)),
  cloudSpanner: s.optional(s.lazy(() => moneyInternalSchema)),
  memorystoreForRedis: s.optional(s.lazy(() => moneyInternalSchema)),
  alloyDb: s.optional(s.lazy(() => moneyInternalSchema)),
  backupForOracle: s.optional(s.lazy(() => moneyInternalSchema)),
  kafka: s.optional(s.lazy(() => moneyInternalSchema)),
  resourceBased: s.optional(s.lazy(() => moneyInternalSchema)),
  onDemand: s.optional(s.lazy(() => moneyInternalSchema)),
};

export const gcpDailyCoverageEntryInternalSchema: Schema<GcpDailyCoverageEntry> =
  s.object<GcpDailyCoverageEntry>(gcpDailyCoverageEntryProperties, { additionalProperties: s.json() });

export const gcpDailyCoverageEntrySchema: Schema<GcpDailyCoverageEntry> = s.lazySchema(() =>
  s.object<GcpDailyCoverageEntry>(
    {
      ...gcpDailyCoverageEntryProperties,
      computeFlexible: s.optional(s.lazy(() => moneySchema)),
      cloudRun: s.optional(s.lazy(() => moneySchema)),
      bigQuery: s.optional(s.lazy(() => moneySchema)),
      bigtable: s.optional(s.lazy(() => moneySchema)),
      cloudSql: s.optional(s.lazy(() => moneySchema)),
      cloudFirestore: s.optional(s.lazy(() => moneySchema)),
      cloudSpanner: s.optional(s.lazy(() => moneySchema)),
      memorystoreForRedis: s.optional(s.lazy(() => moneySchema)),
      alloyDb: s.optional(s.lazy(() => moneySchema)),
      backupForOracle: s.optional(s.lazy(() => moneySchema)),
      kafka: s.optional(s.lazy(() => moneySchema)),
      resourceBased: s.optional(s.lazy(() => moneySchema)),
      onDemand: s.optional(s.lazy(() => moneySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
