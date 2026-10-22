import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The seller country of the cart item. */
export type SellerCountry = string;

export const sellerCountrySchema: Schema<SellerCountry> = s.of<SellerCountry>(s.union([s.string()]));
