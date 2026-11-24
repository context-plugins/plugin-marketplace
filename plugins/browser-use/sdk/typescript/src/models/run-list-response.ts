import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runSummarySchema, type RunSummary } from "./run-summary.js";
import { nextcursorSchema, type Nextcursor } from "./unions/nextcursor.js";

export type RunListResponse = {
  runs: RunSummary[];
  nextCursor?: Nextcursor;
  /** @default false */
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runListResponseSchema: Schema<RunListResponse> = s.object<RunListResponse>(
  {
    runs: s.array(s.lazy(() => runSummarySchema)),
    nextCursor: s.optional(s.lazy(() => nextcursorSchema)),
    hasMore: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
