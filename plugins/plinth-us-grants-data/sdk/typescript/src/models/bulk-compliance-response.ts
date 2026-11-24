import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportDateSchema, type ReportDate } from "./unions/report-date.js";
import { sourcesSchema, type Sources } from "./unions/sources.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

export type BulkComplianceResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  resultsCount: number;
  results: Record<string, unknown>[];
  /** Inputs that were not usable EINs, echoed back rather than dropped. */
  invalidEins: string[];
  reportDate?: ReportDate;
  sources?: Sources;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkComplianceResponseSchema: Schema<BulkComplianceResponse> = s.object<BulkComplianceResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    resultsCount: s.int(),
    results: s.array(s.record(s.string(), s.unknown())),
    invalidEins: s.array(s.string()),
    reportDate: s.optional(s.lazy(() => reportDateSchema)),
    sources: s.optional(s.lazy(() => sourcesSchema)),
    _keysMap: {
      xPlinth: "x_plinth",
      resultsCount: "results_count",
      invalidEins: "invalid_eins",
      reportDate: "report_date",
    },
  },
  { additionalProperties: s.json() },
);
