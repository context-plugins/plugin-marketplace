import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RangeReportingReportsApi = {
  /** Start date of the analysis range */
  startDate?: string;
  /** End date of the analysis range */
  endDate?: string;
  /** Duration of the analysis range in days */
  duration?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rangeReportingReportsApiSchema: Schema<RangeReportingReportsApi> =
  s.object<RangeReportingReportsApi>(
    {
      startDate: s.optional(s.dateOnly()),
      endDate: s.optional(s.dateOnly()),
      duration: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
