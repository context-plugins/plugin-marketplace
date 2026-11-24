import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportSchema, type Report } from "./report.js";

export type BatchGetReportsOutput = {
  /** The array of Report objects returned by BatchGetReports. */
  reports?: Report[];
  /** An array of ARNs passed to BatchGetReportGroups that are not associated with a Report. */
  reportsNotFound?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetReportsOutputSchema: Schema<BatchGetReportsOutput> = s.object<BatchGetReportsOutput>(
  {
    reports: s.optional(s.array(s.lazy(() => reportSchema))),
    reportsNotFound: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
