import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { guidanceSchema, type Guidance } from "./guidance.js";
import { keyMetricSchema, type KeyMetric } from "./key-metric.js";
import { quoteSchema, type Quote } from "./quote.js";
import { segmentSchema, type Segment } from "./segment.js";
import { tableScaleSchema, type TableScale } from "./table-scale.js";
import { verdictSchema, type Verdict } from "./verdict.js";
import { vsPriorGuidanceSchema, type VsPriorGuidance } from "./vs-prior-guidance.js";

/**
 * AlphAI's own structured analysis of an earnings release (SEC Form 8-K item 2.02, or Form 6-K for
 * a foreign private issuer — half-year and full-year periods, IFRS and non-USD figures copied as
 * reported). Every figure was cross-checked against the filing text before storage; consensus
 * estimates and price targets are omitted because they are not in the filing. MCP `alphai_article`
 * returns the structured read; connector `fetch` includes its metrics, comparisons, segments,
 * guidance and limitations in the citation-ready `text` when a completed read exists.
 */
export type EarningsReport = {
  company: string;
  ticker: string;
  fiscalPeriod: string;
  periodEnd?: string | null;
  headline: string;
  verdict: Verdict;
  verdictReason?: string;
  keyMetrics: KeyMetric[];
  segments?: Segment[];
  guidance?: Guidance | null;
  /** Reported figure vs the company's own prior outlook, when available. */
  vsPriorGuidance?: VsPriorGuidance[];
  capitalReturns?: string[];
  balanceSheetCashFlow?: string[];
  drivers?: string[];
  concerns?: string[];
  whatToWatch?: string[];
  quotes?: Quote[];
  /** Several paragraphs of grounded analysis. */
  analysis: string;
  /** What the filing did NOT state, named rather than guessed. */
  missingItems?: string[];
  numbersVerifiedFromDocument?: boolean;
  /**
   * The unit the filing's own table headers name (`(In millions, except per share data)`). The
   * prose and list fields (`analysis`, `balance_sheet_cash_flow`, `capital_returns`, `concerns`, …)
   * quote table figures as printed, so in a read with `table_scale: millions` a bare `$36,197`
   * there is $36,197 million; per-share figures are always as printed. Null when the headers name
   * no unit or name two without a clear majority. Added 2026-10-01 to every stored read.
   */
  tableScale?: TableScale | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const earningsReportSchema: Schema<EarningsReport> = s.object<EarningsReport>(
  {
    company: s.string(),
    ticker: s.string(),
    fiscalPeriod: s.string(),
    periodEnd: s.optionalNullable(s.string()),
    headline: s.string(),
    verdict: verdictSchema,
    verdictReason: s.optional(s.string()),
    keyMetrics: s.array(s.lazy(() => keyMetricSchema)),
    segments: s.optional(s.array(s.lazy(() => segmentSchema))),
    guidance: s.optionalNullable(s.lazy(() => guidanceSchema)),
    vsPriorGuidance: s.optional(s.array(s.lazy(() => vsPriorGuidanceSchema))),
    capitalReturns: s.optional(s.array(s.string())),
    balanceSheetCashFlow: s.optional(s.array(s.string())),
    drivers: s.optional(s.array(s.string())),
    concerns: s.optional(s.array(s.string())),
    whatToWatch: s.optional(s.array(s.string())),
    quotes: s.optional(s.array(s.lazy(() => quoteSchema))),
    analysis: s.string(),
    missingItems: s.optional(s.array(s.string())),
    numbersVerifiedFromDocument: s.optional(s.boolean()),
    tableScale: s.optionalNullable(s.lazy(() => tableScaleSchema)),
    _keysMap: {
      fiscalPeriod: "fiscal_period",
      periodEnd: "period_end",
      verdictReason: "verdict_reason",
      keyMetrics: "key_metrics",
      vsPriorGuidance: "vs_prior_guidance",
      capitalReturns: "capital_returns",
      balanceSheetCashFlow: "balance_sheet_cash_flow",
      whatToWatch: "what_to_watch",
      missingItems: "missing_items",
      numbersVerifiedFromDocument: "numbers_verified_from_document",
      tableScale: "table_scale",
    },
  },
  { additionalProperties: s.json() },
);
