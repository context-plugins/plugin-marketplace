import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionBuyerSchema, type TransactionBuyer } from "../transaction-buyer.js";

/** The buyer used for this payout. */
export type Buyer17 = TransactionBuyer;

export const buyer17Schema: Schema<Buyer17> = s.of<Buyer17>(s.union([s.lazy(() => transactionBuyerSchema)]));
