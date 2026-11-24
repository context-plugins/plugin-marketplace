import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inactiveReportSchema, type InactiveReport } from "./inactive-report.js";
import { topReportSchema, type TopReport } from "./top-report.js";

export type ApiV1AnalyticsResponse = {
  days: number;
  totalViews: number;
  uniqueViewers: number;
  activeReports: number;
  externallySharedReports: number;
  publicReports: number;
  publishesInPeriod: number;
  topReports: TopReport[];
  inactiveReports: InactiveReport[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AnalyticsResponseSchema: Schema<ApiV1AnalyticsResponse> = s.object<ApiV1AnalyticsResponse>(
  {
    days: s.float64(),
    totalViews: s.float64(),
    uniqueViewers: s.float64(),
    activeReports: s.float64(),
    externallySharedReports: s.float64(),
    publicReports: s.float64(),
    publishesInPeriod: s.float64(),
    topReports: s.array(s.lazy(() => topReportSchema)),
    inactiveReports: s.array(s.lazy(() => inactiveReportSchema)),
  },
  { additionalProperties: s.json() },
);
