import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant reference for this payment method. */
export type BuyerExternalIdentifier = string;

export const buyerExternalIdentifierSchema: Schema<BuyerExternalIdentifier> = s.of<BuyerExternalIdentifier>(
  s.union([s.string()]),
);
