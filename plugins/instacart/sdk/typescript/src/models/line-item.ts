import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filtersSchema, type Filters } from "./filters.js";
import { lineItemMeasurementsSchema, type LineItemMeasurements } from "./line-item-measurements.js";

export type LineItem = {
  /** The name of the product. */
  name: string;
  /** The quantity of the product to add. */
  quantity?: number;
  /** The unit of measurement for the quantity. */
  unit?: string;
  /** Custom display text for the line item on the page. */
  displayText?: string;
  /** Instacart product identifiers to match specific products. */
  productIds?: string[];
  /** Universal Product Codes to match specific products. */
  upcs?: string[];
  /** Measurement details for the line item. */
  lineItemMeasurements?: LineItemMeasurements;
  /** Filters to narrow product matching. */
  filters?: Filters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const lineItemProperties: s.Shape<LineItem> = {
  name: s.string(),
  quantity: s.optional(s.float64()),
  unit: s.optional(s.string()),
  displayText: s.optional(s.string()),
  productIds: s.optional(s.array(s.string())),
  upcs: s.optional(s.array(s.string())),
  lineItemMeasurements: s.optional(s.lazy(() => lineItemMeasurementsSchema)),
  filters: s.optional(s.lazy(() => filtersSchema)),
  _keysMap: {
    displayText: "display_text",
    productIds: "product_ids",
    lineItemMeasurements: "line_item_measurements",
  },
};

export const lineItemInternalSchema: Schema<LineItem> = s.object<LineItem>(lineItemProperties, {
  additionalProperties: s.json(),
});

export const lineItemSchema: Schema<LineItem> = s.lazySchema(() =>
  s.object<LineItem>(
    {
      ...lineItemProperties,
      quantity: s.optional(s.float64().check(s.gte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
