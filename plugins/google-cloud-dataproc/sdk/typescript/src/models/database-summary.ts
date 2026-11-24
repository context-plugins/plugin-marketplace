import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planActionSchema, type PlanAction } from "./plan-action.js";
import { resultStatusSchema, type ResultStatus } from "./result-status.js";
import { tableSummary2Schema, type TableSummary2 } from "./table-summary2.js";

/** Summary of results for a specific database in a catalog. */
export type DatabaseSummary = {
  /** Output only. The name of the database. */
  database?: string;
  /**
   * Output only. The migration result status for the database. This is only set if the migration is
   * not a dry run.
   */
  resultStatus?: ResultStatus;
  /** Output only. Aggregated summary of results for all tables in the database. */
  tableSummary?: TableSummary2;
  /** Output only. The migration plan action for the database. */
  planAction?: PlanAction;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const databaseSummarySchema: Schema<DatabaseSummary> = s.object<DatabaseSummary>(
  {
    database: s.optional(s.string()),
    resultStatus: s.optional(s.lazy(() => resultStatusSchema)),
    tableSummary: s.optional(s.lazy(() => tableSummary2Schema)),
    planAction: s.optional(s.lazy(() => planActionSchema)),
  },
  { additionalProperties: s.json() },
);
