import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionActionSchema, type TransactionAction } from "./transaction-action.js";

export type TransactionActions = {
  /** The list of actions triggered for a transaction. */
  items: TransactionAction[];
};

export const transactionActionsSchema: Schema<TransactionActions> = s.object<TransactionActions>({
  items: s.array(s.lazy(() => transactionActionSchema)),
});
