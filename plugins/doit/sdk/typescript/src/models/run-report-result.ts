import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultDoiTReportsApiSchema, type ResultDoiTReportsApi } from "./result-doi-treports-api.js";

/** Results returned when running a report; includes schema and rows. */
export type RunReportResult = {
  result?: ResultDoiTReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runReportResultSchema: Schema<RunReportResult> = s.object<RunReportResult>(
  {
    result: s.optional(s.lazy(() => resultDoiTReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
