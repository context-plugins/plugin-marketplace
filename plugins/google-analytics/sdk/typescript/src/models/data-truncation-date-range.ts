import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Define the truncated date range from start_date to end_date. */
export type DataTruncationDateRange = {
  /** The end date in the format YYYY-MM-DD (inclusive). */
  endDate?: string;
  /** The start date in the format YYYY-MM-DD (inclusive). */
  startDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataTruncationDateRangeSchema: Schema<DataTruncationDateRange> =
  s.object<DataTruncationDateRange>(
    {
      endDate: s.optional(s.string()),
      startDate: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
