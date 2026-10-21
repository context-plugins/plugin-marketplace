import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The context for the report execution. */
export type ReportExecutionContext1 = {
  /** The reference timestamp for the report execution context. */
  referenceTimestamp: Date;
  /** The reference timezone for the report execution context. */
  referenceTimezone: string;
};

export const reportExecutionContext1Schema: Schema<ReportExecutionContext1> =
  s.object<ReportExecutionContext1>({
    referenceTimestamp: s.dateTime(),
    referenceTimezone: s.string(),
    _keysMap: {
      referenceTimestamp: "reference_timestamp",
      referenceTimezone: "reference_timezone",
    },
  });
