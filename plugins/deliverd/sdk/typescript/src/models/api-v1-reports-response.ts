import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportSchema, type Report } from "./report.js";

export type ApiV1ReportsResponse = {
  reports: Report[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsResponseSchema: Schema<ApiV1ReportsResponse> = s.object<ApiV1ReportsResponse>(
  {
    reports: s.array(s.lazy(() => reportSchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
