import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only the items for which the `buyer` has an `external_identifier` that
 * exactly matches this value.
 */
export type BuyerExternalIdentifier24 = string;

export const buyerExternalIdentifier24Schema: Schema<BuyerExternalIdentifier24> =
  s.of<BuyerExternalIdentifier24>(s.union([s.string()]));
