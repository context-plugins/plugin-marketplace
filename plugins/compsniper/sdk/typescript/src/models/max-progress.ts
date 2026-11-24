import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { maxFailedPageInternalSchema, maxFailedPageSchema, type MaxFailedPage } from "./max-failed-page.js";

export type MaxProgress = {
  currentPage: number;
  pagesAttempted: number;
  pagesSucceeded: number;
  pagesFailed: number;
  failedPages: MaxFailedPage[];
  itemsCollected: number;
  consecutiveFailures: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const maxProgressProperties: s.Shape<MaxProgress> = {
  currentPage: s.int(),
  pagesAttempted: s.int(),
  pagesSucceeded: s.int(),
  pagesFailed: s.int(),
  failedPages: s.array(s.lazy(() => maxFailedPageInternalSchema)),
  itemsCollected: s.int(),
  consecutiveFailures: s.int(),
};

export const maxProgressInternalSchema: Schema<MaxProgress> = s.object<MaxProgress>(maxProgressProperties, {
  additionalProperties: s.json(),
});

export const maxProgressSchema: Schema<MaxProgress> = s.lazySchema(() =>
  s.object<MaxProgress>(
    {
      ...maxProgressProperties,
      currentPage: s.int().check(s.gte(0)),
      pagesAttempted: s.int().check(s.gte(0)),
      pagesSucceeded: s.int().check(s.gte(0)),
      pagesFailed: s.int().check(s.gte(0)),
      failedPages: s.array(s.lazy(() => maxFailedPageSchema)),
      itemsCollected: s.int().check(s.gte(0)),
      consecutiveFailures: s.int().check(s.gte(0), s.lte(5)),
    },
    { additionalProperties: s.json() },
  ),
);
