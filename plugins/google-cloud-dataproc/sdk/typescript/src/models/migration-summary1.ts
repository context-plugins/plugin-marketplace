import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { catalogSummarySchema, type CatalogSummary } from "./catalog-summary.js";

/**
 * Output only. Summary of the migration results. This is populated after the backfill or dry run is
 * finished.
 */
export type MigrationSummary1 = {
  /**
   * Output only. The Dataproc Metastore service name (format:
   * projects/*&#47;locations/*&#47;services/*) on which the migration was executed.
   */
  service?: string;
  /** Output only. Summary of results for each catalog involved in the migration. */
  catalogSummaries?: CatalogSummary[];
  /** Output only. The UTC time when the report was written. */
  endTime?: string;
  /** Output only. Whether the migration was a dry run. */
  dryRun?: boolean;
  /** Output only. The UTC time when the source metadata read was initiated. */
  createTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const migrationSummary1Schema: Schema<MigrationSummary1> = s.object<MigrationSummary1>(
  {
    service: s.optional(s.string()),
    catalogSummaries: s.optional(s.array(s.lazy(() => catalogSummarySchema))),
    endTime: s.optional(s.string()),
    dryRun: s.optional(s.boolean()),
    createTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
