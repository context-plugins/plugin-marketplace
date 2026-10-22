import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount3Schema, type Amount3 } from "./amount3.js";
import { periodsSchema, type Periods } from "./periods.js";
import { settlementLinksSchema, type SettlementLinks } from "./settlement-links.js";
import { settlementStatusSchema, type SettlementStatus } from "./settlement-status.js";

export type EntitySettlement = {
  /**
   * Indicates the response contains a settlement object. Will always contain the string
   * `settlement` for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this settlement. */
  id: string;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt?: string;
  /**
   * The settlement's bank reference, as found in your Mollie account and on your bank statement.
   */
  reference?: string | null;
  /**
   * The date on which the settlement was settled, in ISO 8601 format.
   *
   * For an [open settlement](get-open-settlement) or for the [next
   * settlement](get-next-settlement), no settlement date is available.
   */
  settledAt?: string | null;
  status: SettlementStatus;
  amount: Amount3;
  /** The balance token that the settlement was settled to. */
  balanceId: string;
  /**
   * The ID of the oldest invoice created for all the periods, if the invoice has been created yet.
   */
  invoiceId?: string | null;
  /**
   * For bookkeeping purposes, the settlement includes an overview of transactions included in the
   * settlement. These transactions are grouped into 'period' objects — one for each calendar month.
   *
   * For example, if a settlement includes funds from 15 April until 4 May, it will include two
   * period objects. One for all transactions processed between 15 April and 30 April, and one for
   * all transactions between 1 May and 4 May.
   *
   * Period objects are grouped by year, and then by month. So in the above example, the full
   * `periods` collection will look as follows: `{"2024": {"04": {...}, "05": {...}}}`. The year and
   * month in this documentation are referred as `<year>` and `<month>`.
   *
   * The example response should give a good idea of what this looks like in practise.
   */
  periods?: Record<string, Periods>;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: SettlementLinks;
};

export const entitySettlementSchema: Schema<EntitySettlement> = s.object<EntitySettlement>({
  resource: s.string(),
  id: s.string(),
  createdAt: s.optional(s.string()),
  reference: s.optionalNullable(s.string()),
  settledAt: s.optionalNullable(s.string()),
  status: settlementStatusSchema,
  amount: amount3Schema,
  balanceId: s.string(),
  invoiceId: s.optionalNullable(s.string()),
  periods: s.optional(
    s.record(
      s.string(),
      s.lazy(() => periodsSchema),
    ),
  ),
  links: settlementLinksSchema,
  _keysMap: {
    links: "_links",
  },
});
