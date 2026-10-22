import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The external identifier of the buyer to create a transaction for. */
export type BuyerExternalIdentifier9 = string;

export const buyerExternalIdentifier9Schema: Schema<BuyerExternalIdentifier9> =
  s.of<BuyerExternalIdentifier9>(s.union([s.string()]));
