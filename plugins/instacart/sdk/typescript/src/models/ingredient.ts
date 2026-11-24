import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filters1Schema, type Filters1 } from "./filters1.js";
import { measurementsSchema, type Measurements } from "./measurements.js";

export type Ingredient = {
  /** The name of the ingredient. */
  name: string;
  /** Custom display text for the ingredient on the recipe page. */
  displayText?: string;
  /** Instacart product identifiers to match specific products. */
  productIds?: string[];
  /** Universal Product Codes to match specific products. */
  upcs?: string[];
  /** Measurement details for the ingredient. */
  measurements?: Measurements;
  /** Filters to narrow product matching for this ingredient. */
  filters?: Filters1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ingredientSchema: Schema<Ingredient> = s.object<Ingredient>(
  {
    name: s.string(),
    displayText: s.optional(s.string()),
    productIds: s.optional(s.array(s.string())),
    upcs: s.optional(s.array(s.string())),
    measurements: s.optional(s.lazy(() => measurementsSchema)),
    filters: s.optional(s.lazy(() => filters1Schema)),
    _keysMap: {
      displayText: "display_text",
      productIds: "product_ids",
    },
  },
  { additionalProperties: s.json() },
);
