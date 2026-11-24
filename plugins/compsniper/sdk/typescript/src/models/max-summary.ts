import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { maxFailedPageInternalSchema, maxFailedPageSchema, type MaxFailedPage } from "./max-failed-page.js";
import { terminationReasonSchema, type TerminationReason } from "./termination-reason.js";

export type MaxSummary = {
  pagesAttempted: number;
  pagesSucceeded: number;
  pagesFailed: number;
  failedPages: MaxFailedPage[];
  totalItems: number;
  partial: boolean;
  terminationReason: TerminationReason | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const maxSummaryProperties: s.Shape<MaxSummary> = {
  pagesAttempted: s.int(),
  pagesSucceeded: s.int(),
  pagesFailed: s.int(),
  failedPages: s.array(s.lazy(() => maxFailedPageInternalSchema)),
  totalItems: s.int(),
  partial: s.boolean(),
  terminationReason: s.nullable(s.lazy(() => terminationReasonSchema)),
};

export const maxSummaryInternalSchema: Schema<MaxSummary> = s.object<MaxSummary>(maxSummaryProperties, {
  additionalProperties: s.json(),
});

export const maxSummarySchema: Schema<MaxSummary> = s.lazySchema(() =>
  s.object<MaxSummary>(
    {
      ...maxSummaryProperties,
      pagesAttempted: s.int().check(s.gte(0)),
      pagesSucceeded: s.int().check(s.gte(0)),
      pagesFailed: s.int().check(s.gte(0)),
      failedPages: s.array(s.lazy(() => maxFailedPageSchema)),
      totalItems: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
