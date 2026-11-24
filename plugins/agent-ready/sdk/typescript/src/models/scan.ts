import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkResultAgentReadyScansApiSchema,
  type CheckResultAgentReadyScansApi,
} from "./check-result-agent-ready-scans-api.js";
import { pageResultInternalSchema, pageResultSchema, type PageResult } from "./page-result.js";
import {
  statusAgentReadyScansApiSchema,
  type StatusAgentReadyScansApi,
} from "./status-agent-ready-scans-api.js";
import { vercelRatingSchema, type VercelRating } from "./vercel-rating.js";

/** Full scan result. Same shape returned for sync, async, and cached reads. */
export type Scan = {
  id: string;
  rootUrl: string;
  /** Lifecycle state of a scan. Poll until status is 'completed' or 'failed'. */
  status: StatusAgentReadyScansApi;
  createdAt: Date;
  completedAt: Date | null;
  pagesDiscovered: number;
  pagesScanned: number;
  vercelScore: number;
  /** Coarse rating bucket derived from the Vercel Agent Readability score. */
  vercelRating: VercelRating;
  llmstxtScore: number;
  /**
   * Accessibility / layout-stability sub-score over the homepage WCAG checks (A-series). Null when
   * no accessibility checks ran. Separate from the Vercel score — accessibility is WCAG, not the
   * Vercel Agent Readability Spec.
   */
  accessibilityScore: number | null;
  /**
   * Corpus percentile: share of scanned sites this score beats. Null when the corpus is too small
   * to quote.
   */
  percentile: number | null;
  /** Number of sites the percentile is measured against. Null with percentile. */
  corpusTotal: number | null;
  siteChecks: CheckResultAgentReadyScansApi[];
  llmstxtChecks: CheckResultAgentReadyScansApi[];
  pageResults: PageResult[];
  /**
   * Agent-protocol discovery checks (C-series) plus the accessibility checks (A-series). Populated
   * only for surfaces the site exposes; A-checks run whenever the homepage was fetched. Neither
   * family contributes to the Vercel score.
   */
  protocolResults?: CheckResultAgentReadyScansApi[];
  shareToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scanProperties: s.Shape<Scan> = {
  id: s.string(),
  rootUrl: s.string(),
  status: statusAgentReadyScansApiSchema,
  createdAt: s.dateTime(),
  completedAt: s.nullable(s.dateTime()),
  pagesDiscovered: s.int(),
  pagesScanned: s.int(),
  vercelScore: s.int(),
  vercelRating: vercelRatingSchema,
  llmstxtScore: s.int(),
  accessibilityScore: s.nullable(s.int()),
  percentile: s.nullable(s.int()),
  corpusTotal: s.nullable(s.int()),
  siteChecks: s.array(s.lazy(() => checkResultAgentReadyScansApiSchema)),
  llmstxtChecks: s.array(s.lazy(() => checkResultAgentReadyScansApiSchema)),
  pageResults: s.array(s.lazy(() => pageResultInternalSchema)),
  protocolResults: s.optional(s.array(s.lazy(() => checkResultAgentReadyScansApiSchema))),
  shareToken: s.string(),
};

export const scanInternalSchema: Schema<Scan> = s.object<Scan>(scanProperties, {
  additionalProperties: s.json(),
});

export const scanSchema: Schema<Scan> = s.lazySchema(() =>
  s.object<Scan>(
    {
      ...scanProperties,
      rootUrl: s.string().check(s.url()),
      pagesDiscovered: s.int().check(s.gte(0)),
      pagesScanned: s.int().check(s.gte(0)),
      vercelScore: s.int().check(s.gte(0), s.lte(100)),
      llmstxtScore: s.int().check(s.gte(0), s.lte(100)),
      accessibilityScore: s.nullable(s.int().check(s.gte(0), s.lte(100))),
      percentile: s.nullable(s.int().check(s.gte(0), s.lte(100))),
      corpusTotal: s.nullable(s.int().check(s.gte(0))),
      pageResults: s.array(s.lazy(() => pageResultSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
