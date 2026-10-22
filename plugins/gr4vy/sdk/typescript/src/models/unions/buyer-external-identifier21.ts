import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The external identifier of the buyer to filter payment methods by. */
export type BuyerExternalIdentifier21 = string;

export const buyerExternalIdentifier21Schema: Schema<BuyerExternalIdentifier21> =
  s.of<BuyerExternalIdentifier21>(s.union([s.string()]));
