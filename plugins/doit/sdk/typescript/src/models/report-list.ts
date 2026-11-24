import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportSchema, type Report } from "./report.js";

/** List of reports. */
export type ReportList = {
  /** Page token. It is used to request a specific page of the list results. */
  pageToken?: string;
  /** The number of returned records. */
  rowCount?: number;
  reports?: Report[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportListSchema: Schema<ReportList> = s.object<ReportList>(
  {
    pageToken: s.optional(s.string()),
    rowCount: s.optional(s.int()),
    reports: s.optional(s.array(s.lazy(() => reportSchema))),
  },
  { additionalProperties: s.json() },
);
