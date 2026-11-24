import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TopReport = {
  reportId: string;
  title: string;
  views: number;
  uniqueViewers: number;
  lastViewedAt: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topReportSchema: Schema<TopReport> = s.object<TopReport>(
  {
    reportId: s.string(),
    title: s.string(),
    views: s.float64(),
    uniqueViewers: s.float64(),
    lastViewedAt: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
