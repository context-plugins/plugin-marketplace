import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The external identifier of the buyer to query payment methods for. */
export type BuyerExternalIdentifier20 = string;

export const buyerExternalIdentifier20Schema: Schema<BuyerExternalIdentifier20> =
  s.of<BuyerExternalIdentifier20>(s.union([s.string()]));
