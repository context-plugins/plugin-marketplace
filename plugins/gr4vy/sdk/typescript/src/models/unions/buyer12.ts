import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { buyerSchema, type Buyer } from "../buyer.js";

/** The buyer for which this gift card is stored. */
export type Buyer12 = Buyer;

export const buyer12Schema: Schema<Buyer12> = s.of<Buyer12>(s.union([s.lazy(() => buyerSchema)]));
