import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InactiveReport = {
  reportId: string;
  title: string;
  lastViewedAt: string | null;
  publishedAt: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inactiveReportSchema: Schema<InactiveReport> = s.object<InactiveReport>(
  {
    reportId: s.string(),
    title: s.string(),
    lastViewedAt: s.nullable(s.string()),
    publishedAt: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
