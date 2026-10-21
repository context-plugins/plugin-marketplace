import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When `group_by=line_item`, this field provides the quantity of the line item. For token-based
 * line items, the unit is Million tokens (Mtok). For GPU time, the unit is hours.
 */
export type Quantity = string;

export const quantitySchema: Schema<Quantity> = s.of<Quantity>(s.union([s.string()]));
