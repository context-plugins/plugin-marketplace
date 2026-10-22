import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availableBalanceSchema, type AvailableBalance } from "./available-balance.js";
import { capitalSchema, type Capital } from "./capital.js";
import { chargebacksSchema, type Chargebacks } from "./chargebacks.js";
import { closeSchema, type Close } from "./close.js";
import { correctionsSchema, type Corrections } from "./corrections.js";
import { feePrepaymentsSchema, type FeePrepayments } from "./fee-prepayments.js";
import { openSchema, type Open } from "./open.js";
import { paymentsSchema, type Payments } from "./payments.js";
import { pendingBalanceSchema, type PendingBalance } from "./pending-balance.js";
import { refundsSchema, type Refunds } from "./refunds.js";
import { topupsSchema, type Topups } from "./topups.js";
import { transfersSchema, type Transfers } from "./transfers.js";

/**
 * Totals are grouped according to the chosen grouping rule. The example response should give a good
 * idea of what a typical grouping looks like.
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
 *   `fee-prepayments`, `corrections`, `topups` each containing a `pending`, `movedToAvailable`, and
 *   `immediatelyAvailable` sub-group
 *
 * Each sub-group typically has:
 *
 * * An `amount` object containing the group's total amount
 * * A `count` integer if relevant (for example, counting the number of refunds)
 * * A `subtotals` array containing more sub-group objects if applicable
 */
export type Totals = {
  /** The pending balance. Only available if grouping is `status-balances`. */
  pendingBalance?: PendingBalance | null;
  /** The available balance. Only available if grouping is `status-balances`. */
  availableBalance?: AvailableBalance | null;
  /** Only available on `transaction-categories` grouping. */
  open?: Open;
  /** Only available on `transaction-categories` grouping. */
  close?: Close;
  /** Only available on `transaction-categories` grouping. */
  payments?: Payments;
  /** Only available on `transaction-categories` grouping. */
  refunds?: Refunds;
  /** Only available on `transaction-categories` grouping. */
  chargebacks?: Chargebacks;
  /** Only available on `transaction-categories` grouping. */
  capital?: Capital;
  /** Only available on `transaction-categories` grouping. */
  transfers?: Transfers;
  /** Only available on `transaction-categories` grouping. */
  feePrepayments?: FeePrepayments;
  /** Only available on `transaction-categories` grouping. */
  corrections?: Corrections;
  /** Only available on `transaction-categories` grouping. */
  topups?: Topups;
};

export const totalsSchema: Schema<Totals> = s.object<Totals>({
  pendingBalance: s.optionalNullable(s.lazy(() => pendingBalanceSchema)),
  availableBalance: s.optionalNullable(s.lazy(() => availableBalanceSchema)),
  open: s.optional(s.lazy(() => openSchema)),
  close: s.optional(s.lazy(() => closeSchema)),
  payments: s.optional(s.lazy(() => paymentsSchema)),
  refunds: s.optional(s.lazy(() => refundsSchema)),
  chargebacks: s.optional(s.lazy(() => chargebacksSchema)),
  capital: s.optional(s.lazy(() => capitalSchema)),
  transfers: s.optional(s.lazy(() => transfersSchema)),
  feePrepayments: s.optional(s.lazy(() => feePrepaymentsSchema)),
  corrections: s.optional(s.lazy(() => correctionsSchema)),
  topups: s.optional(s.lazy(() => topupsSchema)),
  _keysMap: {
    feePrepayments: "fee-prepayments",
  },
});
