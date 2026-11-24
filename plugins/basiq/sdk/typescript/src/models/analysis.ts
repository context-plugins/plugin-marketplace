import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import {
  frequencyReportingReportsApiSchema,
  type FrequencyReportingReportsApi,
} from "./frequency-reporting-reports-api.js";
import {
  rangeReportingReportsApiSchema,
  type RangeReportingReportsApi,
} from "./range-reporting-reports-api.js";
import {
  summaryReportingReportsApiSchema,
  type SummaryReportingReportsApi,
} from "./summary-reporting-reports-api.js";

export type Analysis = {
  summary?: SummaryReportingReportsApi;
  range?: RangeReportingReportsApi;
  amount?: Amount;
  frequency?: FrequencyReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analysisSchema: Schema<Analysis> = s.object<Analysis>(
  {
    summary: s.optional(s.lazy(() => summaryReportingReportsApiSchema)),
    range: s.optional(s.lazy(() => rangeReportingReportsApiSchema)),
    amount: s.optional(s.lazy(() => amountSchema)),
    frequency: s.optional(s.lazy(() => frequencyReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
