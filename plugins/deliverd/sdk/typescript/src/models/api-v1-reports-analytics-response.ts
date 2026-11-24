import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { byDaySchema, type ByDay } from "./by-day.js";
import { byVersionSchema, type ByVersion } from "./by-version.js";
import { recentViewerSchema, type RecentViewer } from "./recent-viewer.js";

export type ApiV1ReportsAnalyticsResponse = {
  reportId: string;
  title: string;
  totalViews: number;
  uniqueViewers: number | null;
  internalViewers: number | null;
  externalViewers: number | null;
  firstViewedAt: string | null;
  lastViewedAt: string | null;
  byDay: ByDay[];
  byVersion: ByVersion[];
  recentViewers: RecentViewer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsAnalyticsResponseSchema: Schema<ApiV1ReportsAnalyticsResponse> =
  s.object<ApiV1ReportsAnalyticsResponse>(
    {
      reportId: s.string(),
      title: s.string(),
      totalViews: s.float64(),
      uniqueViewers: s.nullable(s.float64()),
      internalViewers: s.nullable(s.float64()),
      externalViewers: s.nullable(s.float64()),
      firstViewedAt: s.nullable(s.string()),
      lastViewedAt: s.nullable(s.string()),
      byDay: s.array(s.lazy(() => byDaySchema)),
      byVersion: s.array(s.lazy(() => byVersionSchema)),
      recentViewers: s.array(s.lazy(() => recentViewerSchema)),
    },
    { additionalProperties: s.json() },
  );
