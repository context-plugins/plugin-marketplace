import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The `external_identifier` of a stored buyer to use. Use this instead of the `buyer_id`. */
export type BuyerExternalIdentifier6 = string;

export const buyerExternalIdentifier6Schema: Schema<BuyerExternalIdentifier6> =
  s.of<BuyerExternalIdentifier6>(s.union([s.string()]));
