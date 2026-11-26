import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { earningsReportSchema, type EarningsReport } from "./earnings-report.js";
import {
  sourceTypeAlphAiRestSymbolsApiSchema,
  type SourceTypeAlphAiRestSymbolsApi,
} from "./source-type-alph-ai-rest-symbols-api.js";

/** One published AlphAI earnings read in a ticker's history. */
export type TickerEarningsReport = {
  /** Article uid; the same read is served inline by /api/news/{uid}/. */
  uid: string;
  timePublished: Date;
  /** The filing's own title. */
  title: string;
  /**
   * `sec_form8k` for a US filer's item 2.02, `sec_form6k` for a foreign private issuer's earnings
   * release.
   */
  sourceType: SourceTypeAlphAiRestSymbolsApi;
  /**
   * The share class the filing was actually made under, which is not always the one requested —
   * SEC-sourced rows tag one class per issuer, so a GOOGL request carries reads filed under GOOG.
   */
  ticker: string;
  fiscalPeriod: string;
  /**
   * AlphAI's own structured analysis of an earnings release (SEC Form 8-K item 2.02, or Form 6-K
   * for a foreign private issuer — half-year and full-year periods, IFRS and non-USD figures copied
   * as reported). Every figure was cross-checked against the filing text before storage; consensus
   * estimates and price targets are omitted because they are not in the filing. MCP
   * `alphai_article` returns the structured read; connector `fetch` includes its metrics,
   * comparisons, segments, guidance and limitations in the citation-ready `text` when a completed
   * read exists.
   */
  analysis: EarningsReport;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tickerEarningsReportSchema: Schema<TickerEarningsReport> = s.object<TickerEarningsReport>(
  {
    uid: s.string(),
    timePublished: s.dateTime(),
    title: s.string(),
    sourceType: sourceTypeAlphAiRestSymbolsApiSchema,
    ticker: s.string(),
    fiscalPeriod: s.string(),
    analysis: earningsReportSchema,
    _keysMap: {
      timePublished: "time_published",
      sourceType: "source_type",
      fiscalPeriod: "fiscal_period",
    },
  },
  { additionalProperties: s.json() },
);
