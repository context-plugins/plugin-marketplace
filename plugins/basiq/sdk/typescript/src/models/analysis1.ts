import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { amount1Schema, type Amount1 } from "./amount1.js";
import {
  frequencyReportingReportsApiSchema,
  type FrequencyReportingReportsApi,
} from "./frequency-reporting-reports-api.js";
import {
  rangeReportingReportsApiSchema,
  type RangeReportingReportsApi,
} from "./range-reporting-reports-api.js";
import { summary1Schema, type Summary1 } from "./summary1.js";

export type Analysis1 = {
  summary?: Summary1;
  range?: RangeReportingReportsApi;
  amount?: Amount1;
  frequency?: FrequencyReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analysis1Schema: Schema<Analysis1> = s.object<Analysis1>(
  {
    summary: s.optional(s.lazy(() => summary1Schema)),
    range: s.optional(s.lazy(() => rangeReportingReportsApiSchema)),
    amount: s.optional(s.lazy(() => amount1Schema)),
    frequency: s.optional(s.lazy(() => frequencyReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
