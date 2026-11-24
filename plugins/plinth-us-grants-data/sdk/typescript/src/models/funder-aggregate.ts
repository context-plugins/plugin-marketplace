import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { firstFiscalYearSchema, type FirstFiscalYear } from "./unions/first-fiscal-year.js";
import { funderNameSchema, type FunderName } from "./unions/funder-name.js";
import { funderStateSchema, type FunderState } from "./unions/funder-state.js";
import { grantCountSchema, type GrantCount } from "./unions/grant-count.js";
import { lastFiscalYearSchema, type LastFiscalYear } from "./unions/last-fiscal-year.js";
import { recipientCountSchema, type RecipientCount } from "./unions/recipient-count.js";
import { totalAmountSchema, type TotalAmount } from "./unions/total-amount.js";

export type FunderAggregate = {
  funderEin: string;
  funderName?: FunderName;
  funderState?: FunderState;
  totalAmount?: TotalAmount;
  grantCount?: GrantCount;
  /**
   * Distinct recipients we can identify as organizations. Grant lines whose recipient is a
   * placeholder ('various individuals', 'see attached') or an individual-assistance program's
   * beneficiary do not count toward this, so it is not the count of distinct recipient_raw strings
   * — for funders that give to individuals the two differ by orders of magnitude. CHANGED 2026-08:
   * this previously counted distinct raw strings, and reads taken before that are not comparable.
   * The excluded money is reported in x_plinth.unidentified.
   */
  recipientCount?: RecipientCount;
  firstFiscalYear?: FirstFiscalYear;
  lastFiscalYear?: LastFiscalYear;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const funderAggregateSchema: Schema<FunderAggregate> = s.object<FunderAggregate>(
  {
    funderEin: s.string(),
    funderName: s.optional(s.lazy(() => funderNameSchema)),
    funderState: s.optional(s.lazy(() => funderStateSchema)),
    totalAmount: s.optional(s.lazy(() => totalAmountSchema)),
    grantCount: s.optional(s.lazy(() => grantCountSchema)),
    recipientCount: s.optional(s.lazy(() => recipientCountSchema)),
    firstFiscalYear: s.optional(s.lazy(() => firstFiscalYearSchema)),
    lastFiscalYear: s.optional(s.lazy(() => lastFiscalYearSchema)),
    _keysMap: {
      funderEin: "funder_ein",
      funderName: "funder_name",
      funderState: "funder_state",
      totalAmount: "total_amount",
      grantCount: "grant_count",
      recipientCount: "recipient_count",
      firstFiscalYear: "first_fiscal_year",
      lastFiscalYear: "last_fiscal_year",
    },
  },
  { additionalProperties: s.json() },
);
