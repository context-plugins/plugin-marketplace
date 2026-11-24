import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insiderTradeEventSchema, type InsiderTradeEvent } from "./insider-trade-event.js";
import {
  insiderTradesMonthBucketSchema,
  type InsiderTradesMonthBucket,
} from "./insider-trades-month-bucket.js";
import {
  insiderTradesSummaryInternalSchema,
  insiderTradesSummarySchema,
  type InsiderTradesSummary,
} from "./insider-trades-summary.js";
import { insiderTradesWeekBucketSchema, type InsiderTradesWeekBucket } from "./insider-trades-week-bucket.js";

export type TickerInsiderTrades = {
  ticker: string;
  /**
   * Earliest recorded transaction date for this ticker; charts should not claim history from before
   * it. `null` when nothing is recorded.
   */
  coverageStart?: string | null;
  /** First page only; `null` on cursor pages. */
  summary?: InsiderTradesSummary | null;
  /**
   * Calendar-month buckets, zero-filled up to the current month and capped to the trailing 12
   * months. First page only; `null` on cursor pages.
   */
  series?: InsiderTradesMonthBucket[] | null;
  /**
   * ISO-week buckets keyed by their Monday, zero-filled up to the current week over the same
   * 12-month horizon. First page only; `null` on cursor pages.
   */
  seriesWeekly?: InsiderTradesWeekBucket[] | null;
  /**
   * Every event of the trailing 12 months, both sides, independent of the paginated list below — a
   * chart never shows a bar without its marks. First page only; `null` on cursor pages.
   */
  chartEvents?: InsiderTradeEvent[] | null;
  /** One page of the event history, newest first; honors `side`. */
  events: InsiderTradeEvent[];
  /** Opaque cursor for the next (older) page; `null` at the end of the recorded history. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tickerInsiderTradesProperties: s.Shape<TickerInsiderTrades> = {
  ticker: s.string(),
  coverageStart: s.optionalNullable(s.dateOnly()),
  summary: s.optionalNullable(s.lazy(() => insiderTradesSummaryInternalSchema)),
  series: s.optionalNullable(s.array(s.lazy(() => insiderTradesMonthBucketSchema))),
  seriesWeekly: s.optionalNullable(s.array(s.lazy(() => insiderTradesWeekBucketSchema))),
  chartEvents: s.optionalNullable(s.array(s.lazy(() => insiderTradeEventSchema))),
  events: s.array(s.lazy(() => insiderTradeEventSchema)),
  nextCursor: s.nullable(s.string()),
  _keysMap: {
    coverageStart: "coverage_start",
    seriesWeekly: "series_weekly",
    chartEvents: "chart_events",
    nextCursor: "next_cursor",
  },
};

export const tickerInsiderTradesInternalSchema: Schema<TickerInsiderTrades> = s.object<TickerInsiderTrades>(
  tickerInsiderTradesProperties,
  { additionalProperties: s.json() },
);

export const tickerInsiderTradesSchema: Schema<TickerInsiderTrades> = s.lazySchema(() =>
  s.object<TickerInsiderTrades>(
    {
      ...tickerInsiderTradesProperties,
      summary: s.optionalNullable(s.lazy(() => insiderTradesSummarySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
