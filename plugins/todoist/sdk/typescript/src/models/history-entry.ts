import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HistoryEntry = {
  /** Ledger entry id. */
  id: number;
  /**
   * What moved the balance: `usage_settled`, `top_up`, `adjustment`, `void`, `expiry` or
   * `chargeback`.
   */
  type: string;
  /** When the entry was written, UTC. */
  createdAt: string;
  /**
   * What produced the entry, within its `type`: `automation_run`, `paid`, `promotional` or
   * `stripe`.
   */
  category?: string;
  /**
   * Outcome of the run this entry settles: `success`, `failed`, `cancelled`, `timed_out` or
   * `partial`. Present on `usage_settled` only. It does not change the amount: every terminal
   * outcome draws the cost the run actually incurred.
   */
  status?: string;
  /**
   * Units taken off the balance, as a positive number, or `null` on a credit, which has no debit
   * side. `0` is a real value and not an absent one: a run that failed before it reached the
   * provider cost nothing. Not a usage figure on its own: `void`, `expiry` and `chargeback` are
   * debits too, so summing this field across types overstates usage by every reversed grant. Filter
   * on `type` to total usage.
   */
  chargedUnits: number | null;
  /**
   * `charged_units` in money, in microdollars (millionths of one page-level `currency` unit), so
   * 27400 is $0.0274. `null` exactly when `charged_units` is.
   */
  chargedAmount: number | null;
  /**
   * Units added to the balance, as a positive number, or `null` on a debit. Set on credits
   * (`top_up`, `adjustment`).
   */
  creditedUnits: number | null;
  /**
   * `credited_units` in money, in microdollars (millionths of one page-level `currency` unit), so
   * 10000000 is $10.00. `null` exactly when `credited_units` is.
   */
  creditedAmount: number | null;
  /**
   * Free-form attribution for the entry. Contents vary by `type` and are not part of the API
   * contract.
   */
  refs?: Record<string, unknown>;
  /** Human-readable summary of the entry. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyEntrySchema: Schema<HistoryEntry> = s.object<HistoryEntry>(
  {
    id: s.int(),
    type: s.string(),
    createdAt: s.string(),
    category: s.optional(s.string()),
    status: s.optional(s.string()),
    chargedUnits: s.nullable(s.int()),
    chargedAmount: s.nullable(s.int()),
    creditedUnits: s.nullable(s.int()),
    creditedAmount: s.nullable(s.int()),
    refs: s.optional(s.record(s.string(), s.unknown())),
    description: s.optional(s.string()),
    _keysMap: {
      createdAt: "created_at",
      chargedUnits: "charged_units",
      chargedAmount: "charged_amount",
      creditedUnits: "credited_units",
      creditedAmount: "credited_amount",
    },
  },
  { additionalProperties: s.json() },
);
