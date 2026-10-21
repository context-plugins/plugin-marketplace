import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionBuyerSchema, type TransactionBuyer } from "../transaction-buyer.js";

/** The buyer used for this transaction. */
export type Buyer18 = TransactionBuyer;

export const buyer18Schema: Schema<Buyer18> = s.of<Buyer18>(s.union([s.lazy(() => transactionBuyerSchema)]));
