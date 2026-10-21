import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The external identifier of the buyer to attach the method to. */
export type BuyerExternalIdentifier4 = string;

export const buyerExternalIdentifier4Schema: Schema<BuyerExternalIdentifier4> =
  s.of<BuyerExternalIdentifier4>(s.union([s.string()]));
