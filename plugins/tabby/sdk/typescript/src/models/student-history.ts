import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Student's payment history with the merchant. */
export type StudentHistory = {
  /** Total count of late payments by the student across history. */
  latePaymentsCount: number;
  /** Average overdue duration in days. */
  avgOverdueDurationDays: number;
  /**
   * Window over which history was calculated, to distinguish a new student's 0 late payments from a
   * long-history clean student's 0.
   */
  observationWindowMonths?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const studentHistorySchema: Schema<StudentHistory> = s.object<StudentHistory>(
  {
    latePaymentsCount: s.int(),
    avgOverdueDurationDays: s.float64(),
    observationWindowMonths: s.optional(s.int()),
    _keysMap: {
      latePaymentsCount: "late_payments_count",
      avgOverdueDurationDays: "avg_overdue_duration_days",
      observationWindowMonths: "observation_window_months",
    },
  },
  { additionalProperties: s.json() },
);
