import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportGroupSchema, type ReportGroup } from "./report-group.js";

export type BatchGetReportGroupsOutput = {
  /** The array of report groups returned by BatchGetReportGroups. */
  reportGroups?: ReportGroup[];
  /** An array of ARNs passed to BatchGetReportGroups that are not associated with a ReportGroup. */
  reportGroupsNotFound?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetReportGroupsOutputSchema: Schema<BatchGetReportGroupsOutput> =
  s.object<BatchGetReportGroupsOutput>(
    {
      reportGroups: s.optional(s.array(s.lazy(() => reportGroupSchema))),
      reportGroupsNotFound: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
