import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataTruncationDateRangeSchema, type DataTruncationDateRange } from "./data-truncation-date-range.js";
import { dataTruncationTypeSchema, type DataTruncationType } from "./data-truncation-type.js";

/** Describes a reason for data truncation in the report. */
export type DataTruncationReason = {
  /** The type of data truncation. */
  dataTruncationType?: DataTruncationType;
  /**
   * The data truncation date in the format YYYY-MM-DD. Indicates data before this date is
   * truncated.
   */
  dataTruncationDate?: string;
  /** The truncated date ranges. */
  dataTruncationDateRanges?: DataTruncationDateRange[];
  /** A descriptive message explaining the data truncation. */
  dataTruncationMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataTruncationReasonSchema: Schema<DataTruncationReason> = s.object<DataTruncationReason>(
  {
    dataTruncationType: s.optional(s.lazy(() => dataTruncationTypeSchema)),
    dataTruncationDate: s.optional(s.string()),
    dataTruncationDateRanges: s.optional(s.array(s.lazy(() => dataTruncationDateRangeSchema))),
    dataTruncationMessage: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
