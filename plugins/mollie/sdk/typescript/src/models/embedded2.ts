import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityBalanceTransactionSchema,
  type EntityBalanceTransaction,
} from "./entity-balance-transaction.js";

export type Embedded2 = {
  /** An array of balance transaction objects. */
  balanceTransactions: EntityBalanceTransaction[];
};

export const embedded2Schema: Schema<Embedded2> = s.object<Embedded2>({
  balanceTransactions: s.array(s.lazy(() => entityBalanceTransactionSchema)),
  _keysMap: {
    balanceTransactions: "balance_transactions",
  },
});
