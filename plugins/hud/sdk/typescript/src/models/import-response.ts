import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { importFile1Schema, type ImportFile1 } from "./import-file1.js";
import { status1Schema, type Status1 } from "./status1.js";
import { completedAtSchema, type CompletedAt } from "./unions/completed-at.js";
import { errorSchema, type Error } from "./unions/error.js";
import { metricsSchema, type Metrics } from "./unions/metrics.js";
import { summarySchema, type Summary } from "./unions/summary.js";

export type ImportResponse = {
  id: string;
  /** @default "harbor" */
  format?: "harbor";
  tasksetId: string;
  /** The bundle, as it was when the import started */
  file: ImportFile1;
  /**
   * `stopped`: the importer refused the bundle or stopped partway, and its report says why;
   * `failed`: the import did not run to an outcome
   */
  status: Status1;
  /** The importer's account of the outcome; set once completed or stopped */
  summary?: Summary;
  /** Named counts the importer reports, e.g. `tasks_imported`; set with `summary` */
  metrics?: Metrics;
  /** Why a failed import failed */
  error?: Error;
  createdAt: Date;
  /** Null while the import is live */
  completedAt?: CompletedAt;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importResponseSchema: Schema<ImportResponse> = s.object<ImportResponse>(
  {
    id: s.string(),
    format: s.defaulted(s.literal("harbor"), "harbor"),
    tasksetId: s.string(),
    file: importFile1Schema,
    status: status1Schema,
    summary: s.optional(s.lazy(() => summarySchema)),
    metrics: s.optional(s.lazy(() => metricsSchema)),
    error: s.optional(s.lazy(() => errorSchema)),
    createdAt: s.dateTime(),
    completedAt: s.optional(s.lazy(() => completedAtSchema)),
    _keysMap: {
      tasksetId: "taskset_id",
      createdAt: "created_at",
      completedAt: "completed_at",
    },
  },
  { additionalProperties: s.json() },
);
