import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When `group_by=line_item`, this field provides the unit price of the line item in USD cents. For
 * token-based line items, the unit is cents per Million tokens (cents/Mtok). For GPU time, the unit
 * is cents per GPU-hour (cents/GPU-hour).
 */
export type UnitPrice = string;

export const unitPriceSchema: Schema<UnitPrice> = s.of<UnitPrice>(s.union([s.string()]));
