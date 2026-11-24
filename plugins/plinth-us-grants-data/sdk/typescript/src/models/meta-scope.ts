import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { firstFiscalYearSchema, type FirstFiscalYear } from "./unions/first-fiscal-year.js";
import { fundersSchema, type Funders } from "./unions/funders.js";
import { grantsSchema, type Grants } from "./unions/grants.js";
import {
  lastCompleteFiscalYearSchema,
  type LastCompleteFiscalYear,
} from "./unions/last-complete-fiscal-year.js";
import { lastFiscalYearSchema, type LastFiscalYear } from "./unions/last-fiscal-year.js";
import { partialFiscalYearsSchema, type PartialFiscalYears } from "./unions/partial-fiscal-years.js";
import { totalAmountSchema, type TotalAmount } from "./unions/total-amount.js";

/**
 * Headline counts for the slice currently being served — the live figure any copy should track.
 *
 * ⚠️ THE TWO YEAR ENDS ARE DIFFERENT NUMBERS AND BOTH ARE PUBLISHED. `last_fiscal_year` is
 * max(tax_year) — sync a mirrored copy against it. `last_complete_fiscal_year` is the newest year
 * that has stopped filling, and it is the one prose should quote: the IRS lag means the corpus
 * always carries a few hundred early filings for a barely-started year, so max(tax_year) reads a
 * year or two ahead of the coverage anyone would recognise. Publishing only the first is what put
 * /meta at FY2026 while every page on the site said FY2025 (2026-08 audit).
 */
export type MetaScope = {
  grants?: Grants;
  totalAmount?: TotalAmount;
  funders?: Funders;
  firstFiscalYear?: FirstFiscalYear;
  /**
   * Newest fiscal year any row falls in — max(tax_year), including years still arriving. Sync
   * against this; do not quote it as the coverage span.
   */
  lastFiscalYear?: LastFiscalYear;
  /**
   * Newest fiscal year that has finished arriving — the span to quote. Null on a slice too thin to
   * measure, never guessed.
   */
  lastCompleteFiscalYear?: LastCompleteFiscalYear;
  /**
   * Fiscal years still filling. Measured the same way /data-quality measures it: a trailing year
   * holding less than 90% of the year before it has not finished arriving. The newest year is
   * always here.
   */
  partialFiscalYears?: PartialFiscalYears;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaScopeSchema: Schema<MetaScope> = s.object<MetaScope>(
  {
    grants: s.optional(s.lazy(() => grantsSchema)),
    totalAmount: s.optional(s.lazy(() => totalAmountSchema)),
    funders: s.optional(s.lazy(() => fundersSchema)),
    firstFiscalYear: s.optional(s.lazy(() => firstFiscalYearSchema)),
    lastFiscalYear: s.optional(s.lazy(() => lastFiscalYearSchema)),
    lastCompleteFiscalYear: s.optional(s.lazy(() => lastCompleteFiscalYearSchema)),
    partialFiscalYears: s.optional(s.lazy(() => partialFiscalYearsSchema)),
    _keysMap: {
      totalAmount: "total_amount",
      firstFiscalYear: "first_fiscal_year",
      lastFiscalYear: "last_fiscal_year",
      lastCompleteFiscalYear: "last_complete_fiscal_year",
      partialFiscalYears: "partial_fiscal_years",
    },
  },
  { additionalProperties: s.json() },
);
