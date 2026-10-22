import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineItemSchema, type LineItem } from "./unions/line-item.js";
import { quantitySchema, type Quantity } from "./unions/quantity.js";
import { unitPriceSchema, type UnitPrice } from "./unions/unit-price.js";

/** Cost result for a single line item. */
export type CostResult = {
  /** The total cost in USD. */
  total: string;
  /**
   * When `group_by=line_item`, this field provides the quantity of the line item. For token-based
   * line items, the unit is Million tokens (Mtok). For GPU time, the unit is hours.
   */
  quantity?: Quantity;
  /**
   * When `group_by=line_item`, this field provides the unit price of the line item in USD cents.
   * For token-based line items, the unit is cents per Million tokens (cents/Mtok). For GPU time,
   * the unit is cents per GPU-hour (cents/GPU-hour).
   */
  unitPrice?: UnitPrice;
  /**
   * When `group_by=line_item`, this field provides the line item name of the grouped costs result.
   */
  lineItem?: LineItem;
};

export const costResultSchema: Schema<CostResult> = s.object<CostResult>({
  total: s.string(),
  quantity: s.optional(s.lazy(() => quantitySchema)),
  unitPrice: s.optional(s.lazy(() => unitPriceSchema)),
  lineItem: s.optional(s.lazy(() => lineItemSchema)),
  _keysMap: {
    unitPrice: "unit_price",
    lineItem: "line_item",
  },
});
