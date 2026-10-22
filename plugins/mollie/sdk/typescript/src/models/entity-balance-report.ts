import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceReportGroupingSchema, type BalanceReportGrouping } from "./balance-report-grouping.js";
import { linksSchema, type Links } from "./links.js";
import { totalsSchema, type Totals } from "./totals.js";

export type EntityBalanceReport = {
  /**
   * Indicates the response contains a balance report object. Will always contain the string
   * `balance-report` for this endpoint.
   */
  resource: string;
  /** The ID of the balance this report is generated for. */
  balanceId: string;
  /**
   * The time zone used for the from and until parameters. Currently only time zone
   * `Europe/Amsterdam` is supported.
   */
  timeZone: string;
  /**
   * The start date of the report, in `YYYY-MM-DD` format. The from date is 'inclusive', and in
   * Central European Time. This means a report with for example `from=2024-01-01` will include
   * movements of 2024-01-01 00:00:00 CET and onwards.
   */
  from: string;
  /**
   * The end date of the report, in `YYYY-MM-DD` format. The until date is 'exclusive', and in
   * Central European Time. This means a report with for example `until=2024-02-01` will include
   * movements up until 2024-01-31 23:59:59 CET.
   */
  until: string;
  grouping: BalanceReportGrouping;
  /**
   * Totals are grouped according to the chosen grouping rule. The example response should give a
   * good idea of what a typical grouping looks like.
   *
   * If grouping `status-balances` is chosen, the main grouping is as follows:
   *
   * * `pendingBalance` containing an `open`, `pending`, `movedToAvailable`, and `close` sub-group
   * * `availableBalance` containing an `open`, `movedFromPending`, `immediatelyAvailable`, and
   *   `close` sub-group
   *
   * If grouping `transaction-categories` is chosen, the main grouping is as follows:
   *
   * * `open` and `close` groups, each containing a `pending` and `available` sub-group
   * * Transaction type groups such as `payments`, `refunds`, `chargebacks`, `capital`, `transfers`,
   *   `fee-prepayments`, `corrections`, `topups` each containing a `pending`, `movedToAvailable`,
   *   and `immediatelyAvailable` sub-group
   *
   * Each sub-group typically has:
   *
   * * An `amount` object containing the group's total amount
   * * A `count` integer if relevant (for example, counting the number of refunds)
   * * A `subtotals` array containing more sub-group objects if applicable
   */
  totals: Totals;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links;
};

export const entityBalanceReportSchema: Schema<EntityBalanceReport> = s.object<EntityBalanceReport>({
  resource: s.string(),
  balanceId: s.string(),
  timeZone: s.string(),
  from: s.string(),
  until: s.string(),
  grouping: balanceReportGroupingSchema,
  totals: totalsSchema,
  links: linksSchema,
  _keysMap: {
    links: "_links",
  },
});
