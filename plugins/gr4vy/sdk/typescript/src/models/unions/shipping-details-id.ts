import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The unique identifier of a set of shipping details stored for the buyer. If provided, the created
 * transaction will include a copy of the details at the point of transaction creation; i.e. it will
 * not be affected by later changes to the detail in the database.
 */
export type ShippingDetailsId = string;

export const shippingDetailsIdSchema: Schema<ShippingDetailsId> = s.of<ShippingDetailsId>(
  s.union([s.string()]),
);
