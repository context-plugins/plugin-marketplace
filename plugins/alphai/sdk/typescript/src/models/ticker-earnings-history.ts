import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tickerEarningsReportSchema, type TickerEarningsReport } from "./ticker-earnings-report.js";

export type TickerEarningsHistory = {
  /** The requested ticker, normalized to upper case. */
  ticker: string;
  /** Newest first, capped at 20. Empty when no read exists yet. */
  reports: TickerEarningsReport[];
  /**
   * Same field, same rules, as `next_report_date` on the symbol detail response: the
   * company-confirmed date of the next report in America/New_York, or `null` when AlphAI holds no
   * confirmed one. Never an estimate.
   */
  nextReportDate?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tickerEarningsHistorySchema: Schema<TickerEarningsHistory> = s.object<TickerEarningsHistory>(
  {
    ticker: s.string(),
    reports: s.array(s.lazy(() => tickerEarningsReportSchema)),
    nextReportDate: s.optionalNullable(s.dateOnly()),
    _keysMap: {
      nextReportDate: "next_report_date",
    },
  },
  { additionalProperties: s.json() },
);
