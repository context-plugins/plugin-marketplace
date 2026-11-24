import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsPrRowSchema, type AnalyticsPrRow } from "./analytics-pr-row.js";

export type AnalyticsPrPage = {
  /**
   * Merged pull requests with at least one completed cubic review in the selected date window,
   * ordered by merge time, newest first.
   */
  data: AnalyticsPrRow[];
  /** Cursor for the next page, or null on the last page. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsPrPageSchema: Schema<AnalyticsPrPage> = s.object<AnalyticsPrPage>(
  {
    data: s.array(s.lazy(() => analyticsPrRowSchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
