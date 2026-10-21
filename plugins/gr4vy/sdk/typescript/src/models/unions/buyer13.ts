import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionBuyerSchema, type TransactionBuyer } from "../transaction-buyer.js";

/** The buyer associated with the payment link. */
export type Buyer13 = TransactionBuyer;

export const buyer13Schema: Schema<Buyer13> = s.of<Buyer13>(s.union([s.lazy(() => transactionBuyerSchema)]));
