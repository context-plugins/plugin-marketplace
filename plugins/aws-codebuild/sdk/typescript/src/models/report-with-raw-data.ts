import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReportWithRawData = {
  /** The ARN of the report. */
  reportArn?: string;
  /** The value of the requested data field from the report. */
  data?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportWithRawDataSchema: Schema<ReportWithRawData> = s.object<ReportWithRawData>(
  {
    reportArn: s.optional(s.string()),
    data: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
