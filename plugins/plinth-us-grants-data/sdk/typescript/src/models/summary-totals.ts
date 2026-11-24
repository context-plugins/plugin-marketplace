import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { firstFiscalYearSchema, type FirstFiscalYear } from "./unions/first-fiscal-year.js";
import { funderCountSchema, type FunderCount } from "./unions/funder-count.js";
import { grantCountSchema, type GrantCount } from "./unions/grant-count.js";
import { lastFiscalYearSchema, type LastFiscalYear } from "./unions/last-fiscal-year.js";
import { totalAmountSchema, type TotalAmount } from "./unions/total-amount.js";

/**
 * Corpus totals for the filter.
 *
 * ⚠️ NO `recipient_count`, DELIBERATELY (removed 2026-08-19). It was two incommensurable things
 * added together — 961,743 resolved EINs plus 1,721,550 distinct strings a filer typed — so 64% of
 * it counted text rather than organizations and the total had no defined unit. Worse, it moved the
 * WRONG WAY: resolving a name to an EIN merges it with that EIN's other rows, so the figure FALLS
 * as entity resolution improves. Resolution has gone 67.3% → 76.0% while this was published, which
 * can only have driven it down against an unchanged reality.
 *
 * It also cost more than everything else here combined: profiled on the live warehouse, the other
 * five fields are ~1.2s and this one was ~6s (a COUNT(DISTINCT) over 2.68M keys, most of them long
 * strings, wrapped in a per-row regexp and a correlated EXISTS). Measured alternatives, both
 * rejected: approx_count_distinct returned 2,469,271 against a true 2,683,293 (8% wrong, not
 * publishable), and precomputing the normalized key as a Parquet column bought 1.44x for +112MB.
 *
 * A per-FUNDER recipient_count still exists on /grants/funders and /premier and is untouched: at
 * that scale it is grouped, cheap, and interpretable, and lib/challenge.ts answers a trial-key
 * challenge from it.
 */
export type SummaryTotals = {
  totalAmount?: TotalAmount;
  grantCount?: GrantCount;
  funderCount?: FunderCount;
  firstFiscalYear?: FirstFiscalYear;
  lastFiscalYear?: LastFiscalYear;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summaryTotalsSchema: Schema<SummaryTotals> = s.object<SummaryTotals>(
  {
    totalAmount: s.optional(s.lazy(() => totalAmountSchema)),
    grantCount: s.optional(s.lazy(() => grantCountSchema)),
    funderCount: s.optional(s.lazy(() => funderCountSchema)),
    firstFiscalYear: s.optional(s.lazy(() => firstFiscalYearSchema)),
    lastFiscalYear: s.optional(s.lazy(() => lastFiscalYearSchema)),
    _keysMap: {
      totalAmount: "total_amount",
      grantCount: "grant_count",
      funderCount: "funder_count",
      firstFiscalYear: "first_fiscal_year",
      lastFiscalYear: "last_fiscal_year",
    },
  },
  { additionalProperties: s.json() },
);
