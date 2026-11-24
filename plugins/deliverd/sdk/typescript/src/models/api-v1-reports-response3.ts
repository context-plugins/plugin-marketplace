import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportSchema, type Report } from "./report.js";

export type ApiV1ReportsResponse3 = {
  report: Report;
  url: string;
  previousSlug: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsResponse3Schema: Schema<ApiV1ReportsResponse3> = s.object<ApiV1ReportsResponse3>(
  {
    report: reportSchema,
    url: s.string(),
    previousSlug: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
