import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. Aggregated summary of results for all tables in the database. */
export type TableSummary2 = {
  /**
   * Output only. Number of tables with a specific migration plan action. The key is the action name
   * (e.g. CREATE, UPDATE, SKIP, etc.).
   */
  planCounts?: Record<string, string>;
  /** Output only. The total number of partitions that failed to migrate at the target. */
  partitionFailedCount?: string;
  /**
   * Output only. Partition migration summary across all Hive tables in the database.The total
   * number of partitions discovered at the source.
   */
  partitionDiscoveredCount?: string;
  /** Output only. The total number of partitions successfully migrated at the target. */
  partitionSuccessCount?: string;
  /**
   * Output only. Number of tables with a specific migration result status. The key is the status
   * name (e.g. SUCCEEDED, FAILED, SKIPPED, etc.). This is only set if the migration is not a dry
   * run.
   */
  resultCounts?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tableSummary2Schema: Schema<TableSummary2> = s.object<TableSummary2>(
  {
    planCounts: s.optional(s.record(s.string(), s.string())),
    partitionFailedCount: s.optional(s.string()),
    partitionDiscoveredCount: s.optional(s.string()),
    partitionSuccessCount: s.optional(s.string()),
    resultCounts: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
