import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { migrationSummary1Schema, type MigrationSummary1 } from "./migration-summary1.js";
import { state15Schema, type State15 } from "./state15.js";

/** Output only. */
export type BackfillStatus2 = {
  /**
   * Output only. The Cloud Storage path where the backfill or dry run report is written. Format:
   * "gs://path-to-report".
   */
  reportPath?: string;
  /**
   * Output only. Summary of the migration results. This is populated after the backfill or dry run
   * is finished.
   */
  migrationSummary?: MigrationSummary1;
  /** Output only. The current state of the backfill (or dry run). */
  state?: State15;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backfillStatus2Schema: Schema<BackfillStatus2> = s.object<BackfillStatus2>(
  {
    reportPath: s.optional(s.string()),
    migrationSummary: s.optional(s.lazy(() => migrationSummary1Schema)),
    state: s.optional(s.lazy(() => state15Schema)),
  },
  { additionalProperties: s.json() },
);
