import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteReportGroupInput = {
  /** The ARN of the report group to delete. */
  arn: string;
  /**
   * If true, deletes any reports that belong to a report group before deleting the report group. If
   * false, you must delete any reports in the report group. Use ListReportsForReportGroup to get
   * the reports in a report group. Use DeleteReport to delete the reports. If you call
   * DeleteReportGroup for a report group that contains one or more reports, an exception is thrown.
   */
  deleteReports?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteReportGroupInputSchema: Schema<DeleteReportGroupInput> = s.object<DeleteReportGroupInput>(
  {
    arn: s.string(),
    deleteReports: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
