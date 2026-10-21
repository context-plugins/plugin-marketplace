import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The external identifier of the buyer to create a payment for. */
export type BuyerExternalIdentifier1 = string;

export const buyerExternalIdentifier1Schema: Schema<BuyerExternalIdentifier1> =
  s.of<BuyerExternalIdentifier1>(s.union([s.string()]));
