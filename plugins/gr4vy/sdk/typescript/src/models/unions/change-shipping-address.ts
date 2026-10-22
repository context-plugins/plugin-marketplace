import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Follow-up link to change the shipping address. */
export type ChangeShippingAddress = string;

export const changeShippingAddressSchema: Schema<ChangeShippingAddress> = s.of<ChangeShippingAddress>(
  s.union([s.string()]),
);
