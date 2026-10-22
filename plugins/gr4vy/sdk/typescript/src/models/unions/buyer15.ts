import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { buyerSchema, type Buyer } from "../buyer.js";

/** The optional buyer for which this payment method has been stored. */
export type Buyer15 = Buyer;

export const buyer15Schema: Schema<Buyer15> = s.of<Buyer15>(s.union([s.lazy(() => buyerSchema)]));
