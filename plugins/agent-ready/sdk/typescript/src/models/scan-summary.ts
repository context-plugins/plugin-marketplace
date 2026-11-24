import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vercelRatingSchema, type VercelRating } from "./vercel-rating.js";

/** Lightweight scan listing entry. */
export type ScanSummary = {
  id: string;
  shareToken: string;
  domain: string;
  rootUrl: string;
  vercelScore: number | null;
  /** Coarse rating bucket derived from the Vercel Agent Readability score. */
  vercelRating: VercelRating | null;
  llmstxtScore: number | null;
  /**
   * Accessibility sub-score (A-series WCAG checks). Null for scans run before the score was
   * persisted.
   */
  accessibilityScore: number | null;
  percentile: number | null;
  corpusTotal: number | null;
  pagesScanned: number | null;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scanSummaryProperties: s.Shape<ScanSummary> = {
  id: s.string(),
  shareToken: s.string(),
  domain: s.string(),
  rootUrl: s.string(),
  vercelScore: s.nullable(s.int()),
  vercelRating: s.nullable(s.lazy(() => vercelRatingSchema)),
  llmstxtScore: s.nullable(s.int()),
  accessibilityScore: s.nullable(s.int()),
  percentile: s.nullable(s.int()),
  corpusTotal: s.nullable(s.int()),
  pagesScanned: s.nullable(s.int()),
  createdAt: s.dateTime(),
};

export const scanSummaryInternalSchema: Schema<ScanSummary> = s.object<ScanSummary>(scanSummaryProperties, {
  additionalProperties: s.json(),
});

export const scanSummarySchema: Schema<ScanSummary> = s.lazySchema(() =>
  s.object<ScanSummary>(
    {
      ...scanSummaryProperties,
      rootUrl: s.string().check(s.url()),
      percentile: s.nullable(s.int().check(s.gte(0), s.lte(100))),
      corpusTotal: s.nullable(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
