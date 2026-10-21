import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportExecutionContext = {
  /** The reference timestamp for the report execution context. */
  referenceTimestamp: Date;
  /** The reference timezone for the report execution context. */
  referenceTimezone: string;
};

export const reportExecutionContextSchema: Schema<ReportExecutionContext> = s.object<ReportExecutionContext>({
  referenceTimestamp: s.dateTime(),
  referenceTimezone: s.string(),
  _keysMap: {
    referenceTimestamp: "reference_timestamp",
    referenceTimezone: "reference_timezone",
  },
});
