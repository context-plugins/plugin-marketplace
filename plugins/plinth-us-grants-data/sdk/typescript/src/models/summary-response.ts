import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { summaryByYearSchema, type SummaryByYear } from "./summary-by-year.js";
import { summaryTotalsSchema, type SummaryTotals } from "./summary-totals.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

/** Aggregates over the WHOLE filter — not paginated, and not restricted by any trial row cap. */
export type SummaryResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  /**
   * Corpus totals for the filter.
   *
   * ⚠️ NO `recipient_count`, DELIBERATELY (removed 2026-08-19). It was two incommensurable things
   * added together — 961,743 resolved EINs plus 1,721,550 distinct strings a filer typed — so 64%
   * of it counted text rather than organizations and the total had no defined unit. Worse, it moved
   * the WRONG WAY: resolving a name to an EIN merges it with that EIN's other rows, so the figure
   * FALLS as entity resolution improves. Resolution has gone 67.3% → 76.0% while this was
   * published, which can only have driven it down against an unchanged reality.
   *
   * It also cost more than everything else here combined: profiled on the live warehouse, the other
   * five fields are ~1.2s and this one was ~6s (a COUNT(DISTINCT) over 2.68M keys, most of them
   * long strings, wrapped in a per-row regexp and a correlated EXISTS). Measured alternatives, both
   * rejected: approx_count_distinct returned 2,469,271 against a true 2,683,293 (8% wrong, not
   * publishable), and precomputing the normalized key as a Parquet column bought 1.44x for +112MB.
   *
   * A per-FUNDER recipient_count still exists on /grants/funders and /premier and is untouched: at
   * that scale it is grouped, cheap, and interpretable, and lib/challenge.ts answers a trial-key
   * challenge from it.
   */
  summary: SummaryTotals;
  byYear: SummaryByYear[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summaryResponseSchema: Schema<SummaryResponse> = s.object<SummaryResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    summary: summaryTotalsSchema,
    byYear: s.array(s.lazy(() => summaryByYearSchema)),
    _keysMap: {
      xPlinth: "x_plinth",
      byYear: "by_year",
    },
  },
  { additionalProperties: s.json() },
);
