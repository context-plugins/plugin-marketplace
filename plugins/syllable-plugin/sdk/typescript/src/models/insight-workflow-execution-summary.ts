import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * How many of a workflow's executions are in each status, optionally within a created_at date
 * range. Counts cover all matching rows, not just one page.
 */
export type InsightWorkflowExecutionSummary = {
  /** Rows in PENDING status @default 0 */
  pending?: number;
  /** Rows in PROCESSING status @default 0 */
  processing?: number;
  /** Rows in COMPLETED status @default 0 */
  completed?: number;
  /** Rows in FAILED status @default 0 */
  failed?: number;
  /** Total rows across all statuses @default 0 */
  total?: number;
};

export const insightWorkflowExecutionSummarySchema: Schema<InsightWorkflowExecutionSummary> =
  s.object<InsightWorkflowExecutionSummary>({
    pending: s.defaulted(s.int(), 0),
    processing: s.defaulted(s.int(), 0),
    completed: s.defaulted(s.int(), 0),
    failed: s.defaulted(s.int(), 0),
    total: s.defaulted(s.int(), 0),
  });
